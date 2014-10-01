var DIRECTION = {
  UP: 1,
  DOWN: - 1,
  STILL: 0
};

var Mode = {
  NONE: 0,
  PANNING: 1,
  SCROLLING: 2
};

var DECELERATION = .0008,
  SPRING = [200, 25],
  QUADRATIC_BEZIER = [0.25, 0.46, 0.45, 0.94];

var TEST_ELEMENT = document.createElement('div');
var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
  var prefix, prop;
  var camelProp = property[0].toUpperCase() + property.slice(1);

  for (var i = 0, len = VENDOR_PREFIXES.length; i < len; i ++) {
    prefix = VENDOR_PREFIXES[i];
    prop = (prefix) ? prefix + camelProp : property;

    if (prop in obj) {
      return prop;
    }
  }

  return undefined;
}

var transformKey = prefixed(TEST_ELEMENT.style, 'transform');

var Tools = {
  /**
   * Map the a value to a result.
   * Ex. value = .5, valueRange = [0, 1], resultRange = [0, 100], result = 50
   */
  map: function (value, valueRange, resultRange, keepWithinRange, maxDecimalPlaces) {
    var valueRangeStart = valueRange[0], valueRangeEnd = valueRange[1],
      resultRangeStart = resultRange[0], resultRangeEnd = resultRange[1];

    var currentProgress = (value - valueRangeStart) / (valueRangeEnd - valueRangeStart);

    var result = currentProgress * (resultRangeEnd - resultRangeStart) + resultRangeStart;

    if (keepWithinRange) {
      // if the range is increasing (0 -> 100)
      if (resultRangeEnd > resultRangeStart) {
        if (result > resultRangeEnd) {
          result = resultRangeEnd;
        } else if (result < resultRangeStart) {
          result = resultRangeStart;
        }
      }
      // if the range is decreasing (100 -> 0)
      else {
        if (result > resultRangeStart) {
          result = resultRangeStart;
        } else if (result < resultRangeEnd) {
          result = resultRangeEnd;
        }
      }
    }

    if (maxDecimalPlaces) {
      var baseTenMultiplier = Math.pow(10, maxDecimalPlaces);
      result = Math.floor(result * baseTenMultiplier) / baseTenMultiplier;
    }

    return result;
  },
  /**
   * Get or set the transform on an element.
   */
  transform: function (element, transform) {
    if (transform === undefined) return element.style[transformKey];

    element.style[transformKey] = transform;
  }
};

/**
 * Allow the user to drag cards up and down.
 * Scroll, scale and snap the card into place.
 */
Cards = function (options, callbacks) {
  var self = this;

  self.options = _.extend({}, Cards.DEFAULT_OPTIONS, options);

  self.$scrollview = options.$scrollview;
  self.scrollview = self.$scrollview[0];
  self.$cards = options.$cards;
  self.cards = self.$cards[0];
  self.cardElements = self.cards.children;
  self.parent = self.scrollview.parentElement;

  // Use for manually getting & using velocity animation values.
  // XXX manually setup our own spring animation so we do not have the overhead
  // of style calculations on the placeholder element. See the spring branch.
  self.$animationPlaceholder = $(document.createElement('div'));

  self._panMode = Mode.NONE;

  // Store the last pan event with velocity
  // to decide the scale to snap the cards to.
  self._lastPanEvent = null;

  // The previous pan event -- used for calculating deltas.
  self._previousPan = null;

  self.scale = self.options.initialScale;

  // Value range for scales on the yAxis proportional to
  // startY. Set on the first movement along the yAxis.
  self._scalePath = null;

  // The target card when moving on the yAxis.
  self._targetCardIndex = self.options.initialIndex;

  self._scrollingEnabled = self.options.initialScale !== 1;

  // The card's left translation (like scrollLeft).
  self._translateLeft = 0;

  // How far you can "scroll".
  self._maxTranslateLeftSmallScale = 0;

  // The translateLeft at small scale before scaling up.
  // We track this so we can return to it.
  self._smallScaleTranslateLeft = 0;

  // Make the scrollview width large enough to fit the window at min scale.
  self._scrollviewWidth = Math.floor(window.innerWidth / self.options.minScale);
  self.$scrollview.width(self._scrollviewWidth);

  setTimeout(function () {
    self._initialize(callbacks && callbacks.ready);
  }, 0);
};

Cards.DEFAULT_OPTIONS = {
  $scrollview: null, // Required
  $cards: null, // Required

  cardMargin: 5,

  marginTop: 56,

  // Snap point
  smallScale: .4,

  // Bounds
  maxScale: 1.4,
  minScale: .3,

  // Start at
  initialIndex: 0,
  initialScale: .4,

  debug: false
};

Cards.prototype._initialize = function (callback) {
  var self = this;
  self.changed();
  self._track();
  callback && callback(self);
};

Cards.prototype._track = function () {
  var self = this;

  var hammer = self._hammer = new Hammer.Manager(self.scrollview);

  hammer.add(new Hammer.Pan({
    direction: Hammer.DIRECTION_ALL
  }));

  hammer.on('pan', self._handlePan.bind(self));
  hammer.on('panend', self._handlePanEnd.bind(self));

  hammer.add(new Hammer.Tap());

  hammer.on('tap', self._handleTap.bind(self));
};

var onNextFrame = null,
  nextFrameRequested = false;

/**
 * Throttle animation frame requests.
 */
var requestAnimationFrameThrottled = function (func) {
  onNextFrame = func;

  // Wait half a second before requesting a new animation frame.
  if (nextFrameRequested && new Date() - nextFrameRequested < 500) return;

  nextFrameRequested = new Date();
  requestAnimationFrame(function () {
    onNextFrame && onNextFrame();
    onNextFrame = null;
    nextFrameRequested = false;
  });
};

var calculateTargetCardIndex = function (xPos) {
  var self = this;

  var scaledTranslatedX = self._translateLeft + (xPos / self.scale);
  var targetCardIndex = Math.floor(scaledTranslatedX / (window.innerWidth + self.options.cardMargin));

  return targetCardIndex >= 0 && targetCardIndex < self.cardElements.length
    ? targetCardIndex
    : null;
};

/**
 * Scroll or scale the cards.
 */
Cards.prototype._handlePan = function (panEvent) {
  var self = this;

  // If the touch is not on a card, do nothing.
  var targetCardIndex = calculateTargetCardIndex.call(this, panEvent.center.x);
  if (targetCardIndex === null) return;

  if (! self._panMode) self._startPan(panEvent, targetCardIndex);

  self.options.debug && console.log((self._panMode === Mode.PANNING ? 'panning' : 'scrolling'),
    'velocityX', panEvent.velocityX, 'velocityY', panEvent.velocityY,
    'deltaX', panEvent.deltaX, 'deltaY', panEvent.deltaY, panEvent);

  // Store the last pan event with velocity.
  if (panEvent && (panEvent.velocityX !== 0 || panEvent.velocityX !== 0)) {
    self._lastPanEvent = panEvent;
  }

  requestAnimationFrameThrottled(function () {
    if (! self._panMode) return;

    var deltaX = 0;

    // Scroll the x axis, except at full scale.
    if (self.scale !== 1) {
      // Calculate the delta from the previous pan event.
      deltaX = panEvent.deltaX;
      if (self._previousPan) deltaX -= self._previousPan.deltaX;
      self._translateLeft -= deltaX / self.scale;
    }

    // If we are still panning, keep track of the last pan event.
    self._previousPan = self._panMode !== Mode.NONE ? panEvent : null;

    var newScale;
    if (self._panMode === Mode.PANNING) {
      // Figure out the scale based on the scale path and the current y pos.
      var yPos = panEvent.center.y - self.options.marginTop;
      newScale = Tools.map(yPos, self._scalePath, [self.options.smallScale, 1]);

      // If the new scale is past the min / max bounds do not scale.
      if (newScale < self.options.minScale) newScale = self.options.minScale;
      if (newScale > self.options.maxScale) newScale = self.options.maxScale;

      // Offset the x position based on the deltaScale
      var deltaScale = newScale - self.scale;
      var offset = deltaScale * (panEvent.center.x + deltaX) / self.options.smallScale;
      offset = (1 - newScale + self.options.smallScale) * (offset / newScale);

      self._translateLeft += offset;
    }

    self._transform(newScale);
  });
};

/**
 * The scale path based on the initial touch point.
 */
var calculateScalePath = function (start) {
  var self = this;

  var fullScaleHeight = window.innerHeight - this.options.marginTop;
  var smallScaleHeight = fullScaleHeight * self.options.smallScale;

  var cardHeight = fullScaleHeight * self.scale;
  var cardTop = fullScaleHeight - cardHeight;

  // Find the y position relative to the current card.
  var startY = start.y - self.options.marginTop;
  var relativeY = Math.abs((startY - cardTop) / cardHeight);

  // Calculate the y for the card at full scale.
  var relativeFullCardY = relativeY * fullScaleHeight;

  // Calculate the y for the card at small scale.
  var relativeScaledCardY = relativeY * self.options.smallScale * fullScaleHeight;

  var scaledCardY = fullScaleHeight - (smallScaleHeight - relativeScaledCardY);

  return [scaledCardY, relativeFullCardY];
};

/**
 /**
 * On the first pan
 * - set the mode and target card index
 * - stop any in progress animation
 *
 * If this is a pan (not a scroll)
 * - set the scale path
 * - trigger a cardPanning event
 */
Cards.prototype._startPan = function (panEvent, targetCardIndex) {
  var self = this;

  self._targetCardIndex = targetCardIndex;
  self._stopAnimation();

  self.options.debug && console.log('start pan', 'scale', self.scale, 'velocityX',
    panEvent.velocityX, 'velocityY', panEvent.velocityY, panEvent);

  // Add .01 tolerance to small scale in case someone
  // scrolls right after it is transitioning down.
  var smallScale = self.scale < self.options.smallScale + .01;

  if (smallScale && Math.abs(panEvent.deltaX) > Math.abs(panEvent.deltaY)) {
    self._panMode = Mode.SCROLLING;
    return;
  }

  if (smallScale) self._smallScaleTranslateLeft = self._translateLeft;

  self._scalePath = calculateScalePath.call(this, panEvent.center);
  self._panMode = Mode.PANNING;

  self.$scrollview.trigger('cardPanning', {
    target: self.cardElements[targetCardIndex],
    targetIndex: self._targetCardIndex
  });
};

/**
 * Scale and scroll (translateX) the cards.
 */
Cards.prototype._transform = function (newScale) {
  var self = this;

  if (newScale) {
    var scale = self.scale = newScale;

    self._updateProgress();

    // Make the scrollview flush along the x & y axis.
    var translateX = - self._scrollviewWidth * (1 - scale) / 2;
    translateX = Math.floor(translateX);

    var fullScaleHeight = window.innerHeight - self.options.marginTop;
    var translateY = fullScaleHeight * (1 - scale) / 2;
    translateY = Math.floor(translateY);

    // cache the transform values on the scrollview element
    self.scrollview._transformCache = {
      translateX: translateX,
      translateY: translateY,
      scale: scale
    };

    var scrollviewTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,0px) scale3d(' + scale + ',' + scale + ',1)';
    Tools.transform(self.scrollview, scrollviewTransform);
  }

  if (self._translateLeft) {
    self._translateLeft = Math.floor(self._translateLeft);

    var cardsTransform = 'translate3d(' + - self._translateLeft + 'px,0px,0px)';
    Tools.transform(self.cards, cardsTransform);
  }
};

var _parentLevelOutRange = [Cards.DEFAULT_OPTIONS.smallScale, .8],
  _parentLevelOutOpacity = [.99, 0];

Cards.prototype._updateProgress = function () {
  var self = this;

  var progress = Math.floor(self.scale * 100) / 100;
  if (self._progress === progress) return;

  self._progress = progress;

  // TODO API HOOK
  // for (var i = 0; i < self.cardElements.length; i++) {
  //  Card.progress(self.cardElements[i], progress, i === self._targetCardIndex);
  // }

  // Transition the parent level / root card out on child level progress.
  var levels = self.parent.children;

  var parentLevelIndex = _.indexOf(levels, self.scrollview) - 1;
  if (parentLevelIndex < 0) return;

  // TODO API HOOK
  // levels[parentLevelIndex].style.opacity = Tools.map(progress, _parentLevelOutRange, _parentLevelOutOpacity, true, 2);
};

Cards.prototype._handlePanEnd = function (event) {
  var self = this;

  // If we were not panning ignore the pan end.
  if (self._panMode === Mode.NONE) return;

  // Use the last pan event with velocity.
  var panEvent = self._lastPanEvent || event;

  if (self._panMode === Mode.PANNING) self._scaleEnded(panEvent);
  else self._scrollEnded(panEvent);

  self._lastPanEvent = null;
  self._previousPan = null;

  self._panMode = Mode.NONE;
};

/**
 * Snap to full or small scale.
 */
Cards.prototype._scaleEnded = function (panEvent) {
  var self = this;

  self.options.debug && console.log('scale ended at', self.scale, panEvent);

  var yDirection = DIRECTION.STILL;
  if (panEvent.velocityY > .1) yDirection = DIRECTION.UP;
  else if (panEvent.velocityY < - .1) yDirection = DIRECTION.DOWN;

  var midpoint = 1 - ((1 - self.options.smallScale) / 2);
  var absVelocityX = Math.abs(panEvent.velocityX);

  // Snap to full scale and change cards if we are past the midpoint
  // and the x velocity is 2x as much as the y velocity.
  var panCardsAtFullScale = self.scale > midpoint && absVelocityX > Math.abs(panEvent.velocityY) * 2 && absVelocityX > .5;

  // Snap to full scale if the y direction is up
  // or the scale is past the midpoint and the y direction is still.
  var snapToFullScale = panCardsAtFullScale || yDirection === DIRECTION.UP || (yDirection === DIRECTION.STILL && self.scale > midpoint);

  // Snap to a target index if we are snapping to full scale.
  var targetIndex = snapToFullScale ? self._targetCardIndex : null;

  if (panCardsAtFullScale) {
    // Move to the previous or next card.
    if (panEvent.velocityX <= - .5) targetIndex --;
    else if (panEvent.velocityX >= .5) targetIndex ++;

    // Keep the target index within the bounds.
    targetIndex = targetIndex >= 0 && targetIndex < self.cardElements.length ? targetIndex : self._targetCardIndex;
  }


  self.snap(snapToFullScale ? 1 : self.options.smallScale, targetIndex);
};

/**
 * Scroll based on the ending velocity.
 */
Cards.prototype._scrollEnded = function (panEvent) {
  var self = this;

  self.options.debug && console.log('scroll ended');

  var translateLeftWithMomentum = self._translateLeft + (panEvent.velocityX * panEvent.velocityX) / (2 * DECELERATION) * (panEvent.deltaX > 0 ? - 1 : 1);

  if (translateLeftWithMomentum < 0) {
    translateLeftWithMomentum = 0;
  } else if (translateLeftWithMomentum > self._maxTranslateLeftSmallScale) {
    translateLeftWithMomentum = self._maxTranslateLeftSmallScale;
  }

  var animateOpts = {
    duration: panEvent.velocityX / DECELERATION,
    translateLeft: [translateLeftWithMomentum, QUADRATIC_BEZIER, self._translateLeft]
  };

  self._animateTransform(animateOpts);
};

Cards.prototype._handleTap = function (tapEvent) {
  var self = this;

  var targetCardIndex = calculateTargetCardIndex.call(self, tapEvent.center.x);
  if (targetCardIndex === null) return;

  // Trigger an event on the card element
  $(self.cardElements[targetCardIndex]).trigger('cardTap', { index: targetCardIndex });
};

/**
 * Snap the scrollview to a scale.
 * @param snapToScale The scale to snap to.
 * @param [targetIndex] The target index to center (only when snapping to scale 1).
 */
Cards.prototype.snap = function (snapToScale, targetIndex) {
  var self = this,
    startScale = self.scale;

  self.options.debug && console.log('snap to', snapToScale, 'to card', targetIndex);

  self._scrollingEnabled = snapToScale !== 1;

  if (typeof targetIndex === 'number') {
    self._targetCardIndex = targetIndex;
  }

  var animateOpts = {
    scale: [snapToScale, SPRING, startScale]
  };

  var translateLeft = self._translateLeft;
  if (snapToScale === 1) {
    translateLeft = (window.innerWidth + self.options.cardMargin) * targetIndex;
  } else {
    if (Math.abs((startScale - snapToScale) / (1 - self.options.smallScale)) > .5) {
      translateLeft = self._smallScaleTranslateLeft;
    }

    // Keep translateLeft within bounds
    translateLeft = translateLeft > 0 ? translateLeft : 0;
    translateLeft = translateLeft < self._maxTranslateLeftSmallScale ? translateLeft : self._maxTranslateLeftSmallScale;
  }

  animateOpts.translateLeft = [translateLeft, SPRING, self._translateLeft];

  self._animateTransform(animateOpts, function () {
    if (snapToScale === 1) {
      self.$scrollview.trigger('cardExpanded', {
        target: self.cardElements[targetIndex],
        targetIndex: targetIndex
      });
    }
  });
};

Cards.prototype._animateTransform = function (animationOpts, complete) {
  var self = this;

  if (animationOpts.translateLeft !== undefined) {
    animationOpts.translateX = animationOpts.translateLeft;
    delete animationOpts.translateLeft;
  }

  // Use the animation placeholder element with velocity to get the animation values.
  self.$animationPlaceholder.velocity(animationOpts, {
    progress: function (elements) {
      var style = elements[0].style,
        elementTransform = style.transform || style.webkitTransform;

      var newScale;

      if (animationOpts.scale) {
        // Extract scale delta from the transform string.
        newScale = elementTransform.substring(elementTransform.indexOf('scale(') + 6);
        newScale = + newScale.substring(0, newScale.indexOf(')'));
      }

      if (animationOpts.translateX) {
        var translateStr = elementTransform.substring(elementTransform.indexOf('translateX') + 11);
        translateStr = + translateStr.substring(0, translateStr.indexOf('px)'));

        self._translateLeft = translateStr;
      }

      self._transform(newScale);
    },
    complete: complete
  });
};

Cards.prototype._stopAnimation = function () {
  this.$animationPlaceholder.velocity('stop');
};

/**
 * Call this whenever the # of cards changed so we can update the width.
 * Buffer the cards width so the last card cannot scroll past the edge at small scale.
 * We care about small scale, because is the only scale the user can natively scroll.
 * Above small scale we "scroll" with translateX.
 */
Cards.prototype.changed = function () {
  var self = this;

  var cardWidth = window.innerWidth + self.options.cardMargin;

  self.cardElements = self.cards.children;

  if (self.cardElements.length < 3) {
    self._maxTranslateLeftSmallScale = 0;
  } else {
    var thirdCard = cardWidth / 2 + (self.options.cardMargin * 2);
    self._maxTranslateLeftSmallScale = thirdCard + (self.cardElements.length - 3) * cardWidth;
  }

  var cardsWidth = cardWidth * self.cardElements.length
    /* remove the margin from the last card */
    - self.options.cardMargin;

  // The buffer is the extra space on the scrollview.
  // It has extra space because it's width is set to fit at minScale.
  var bufferWidth = self._scrollviewWidth
    /* the width the scrollview should be at small scale */
    - (window.innerWidth / self.options.smallScale);

  // By adding the buffer width we prevent the user from scrolling past the edge.
  self.$cards.width(Math.floor(cardsWidth + bufferWidth));

  // Set the scale and position.
  self._translateLeft = cardWidth * self._targetCardIndex;
  self._transform(self.scale);
};

Cards.prototype.destroy = function () {
  var self = this;
  self._stopAnimation();

  // Wait until after the element is removed to prevent a style recalculation.
  Deps.afterFlush(function () {
    self._hammer.destroy();
  });
};