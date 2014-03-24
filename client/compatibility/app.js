//XXX figure out how to properly define components once Famo.us is released -- we added define manually for now

Famous(function (require) {
    //CoverView

    var Surface = require("famous/Surface"),
        Modifier = require("famous/Modifier"),
        Matrix = require("famous/Matrix"),
        View = require("famous/View");

    function CoverView() {
        View.apply(this, arguments), this.profileImg = new Image, this.profileImg.src = this.options.img, this.profileImg.width = 320, this.profileImg.style.webkitBoxReflect = "below";
        var coverBackground = new Surface({
            content: '<img width="320" src="covers/bg.png" />'
        });

        var coverBackgroundTransform = new Modifier({
            transform: Matrix.translate(0, 0, .001)
        });
        this._add(coverBackgroundTransform).link(coverBackground);

        var profileImageSurface = new Surface({
            size: [this.options.size, this.options.size],
            content: this.profileImg
        });
        this._add(profileImageSurface);
    }

    CoverView.prototype = Object.create(View.prototype);
    CoverView.prototype.constructor = CoverView;
    CoverView.DEFAULT_OPTIONS = {
        text: null,
        name: null,
        img: null
    };

    //StoriesView

    var EventHandler = require("famous/EventHandler"),
        GenericSync = require("famous-sync/GenericSync"),
        Transitionable = require("famous/Transitionable"),
        SpringTransition = require("famous-physics/utils/SpringTransition"),
        Scrollview = require("famous-views/Scrollview"),
        ViewSequence = require("famous/ViewSequence"),
        Utility = require("famous/Utility"),
        Utils = require("famous-utils/Utils"),
        StoryData = require("app/Data/StoryData"),
        StoryView = require("app/StoryViews/StoryView"),
        PhotoStoryView = require("app/StoryViews/PhotoStoryView"),
        ArticleStoryView = require("app/StoryViews/ArticleStoryView");

    function StoriesView() {
        View.apply(this, arguments), S.call(this), g.call(this), w.call(this), window.app = this
    }

    Transitionable.registerMethod("spring", SpringTransition);
    StoriesView.prototype = Object.create(View.prototype);
    StoriesView.prototype.constructor = StoriesView;

    StoriesView.DEFAULT_OPTIONS = {
        velThreshold: .7,
        spring: {
            method: "spring",
            period: 200,
            dampingRatio: 1
        },
        curve: {
            duration: 500,
            curve: "easeOut"
        },
        cardScale: .445,
        gutter: 2
    };
    StoriesView.DEFAULT_OPTIONS.cardWidth = StoriesView.DEFAULT_OPTIONS.cardScale * window.innerWidth;
    StoriesView.DEFAULT_OPTIONS.cardHeight = StoriesView.DEFAULT_OPTIONS.cardScale * window.innerHeight;
    StoriesView.DEFAULT_OPTIONS.initY = window.innerHeight - StoriesView.DEFAULT_OPTIONS.cardHeight;
    StoriesView.DEFAULT_OPTIONS.posThreshold = (window.innerHeight - StoriesView.DEFAULT_OPTIONS.cardHeight) / 2;
    StoriesView.DEFAULT_OPTIONS.scrollOpts = {
        direction: Utility.Direction.X,
        defaultItemSize: [StoriesView.DEFAULT_OPTIONS.cardWidth, StoriesView.DEFAULT_OPTIONS.cardHeight],
        itemSpacing: 2 / StoriesView.DEFAULT_OPTIONS.cardScale,
        margin: 3 * window.innerWidth,
        pageSwitchSpeed: .1,
        pagePeriod: 300,
        pageDamp: 1,
        speedLimit: 10,
        drag: .001
    };

    var g = function () {
        this.storiesHandler = new EventHandler, this.scrollview = new Scrollview(this.options.scrollOpts), this.stories = [];
        for (var t = 0; t < StoryData.length; t++) {
            var i, e = {
                profilePics: StoryData[t].profilePics,
                name: StoryData[t].name,
                text: StoryData[t].text,
                time: StoryData[t].time,
                likes: StoryData[t].likes,
                comments: StoryData[t].comments,
                scale: this.options.cardScale
            };
            StoryData[t].article ? (e.content = StoryData[t].article, e.thumbSm = StoryData[t].articleThumbSm, e.thumbLg = StoryData[t].articleThumbLg, e.velThreshold = this.options.velThreshold, i = new ArticleStoryView(e)) : (e.photos = StoryData[t].photos, i = StoryData[t].photos && StoryData[t].photos.length > 1 ? new PhotoStoryView(e) : new StoryView(e)), i.pipe(this.storiesHandler), this.stories.push(i), i.on("touchstart", function (t) {
                this.targetStory = t
            }.bind(this, i))
        }
        this.storiesHandler.pipe(this.scrollview), this.storiesHandler.pipe(this.ySync);
        var s = new ViewSequence(this.stories, 0, !0);
        this.scrollview.sequenceFrom(s), this.scrollview.on("paginate", function () {
            this.targetStory.sequence && (this.targetStory.sequence(), this.targetStory.disableScroll())
        }.bind(this))
    };

    var S = function () {
        this.yPos = new Transitionable(this.options.initY), this.ySync = new GenericSync(function () {
            return [0, this.yPos.get()]
        }.bind(this))
    };

    var w = function () {
        this.ySync.on("start", function () {
            var t = this.yPos.get();
            this.direction = void 0, 0 === t && this.targetStory.scrollable && this.targetStory.enableScroll(), 0 === t && this.targetStory.flipable && this.targetStory.enableFlip(), this.enableY = !1
        }.bind(this));

        this.ySync.on("update", function (t) {
            var i = this.yPos.get();
            this.direction || (Math.abs(t.v[1]) > Math.abs(t.v[0]) ? this.direction = "y" : (this.storiesHandler.unpipe(this.ySync), this.direction = "x")), "y" === this.direction ? (0 !== i ? (this.enableY = !0, this.swipeY = !0) : (this.targetStory.scrollable || this.targetStory.flipable || (this.enableY = !0), this.targetStory.scrollable && this.targetStory.top && t.v[1] > 0 && (this.targetStory.disableScroll(), this.enableY = !0), this.targetStory.flipable && this.targetStory.closed && t.v[1] > 0 && (this.targetStory.disableFlip(), this.enableY = !0)), this.enableY && this.yPos.set(Math.min(this.options.initY + 75, Math.max(-75, t.p[1])))) : this.targetStory.scrollable && Math.abs(this.targetStory.scrollview.getVelocity()) > .05 && this.storiesHandler.unpipe(this.scrollview)
        }.bind(this));

        this.ySync.on("end", function (t) {
            this.storiesHandler.pipe(this.scrollview), this.storiesHandler.pipe(this.ySync);
            var i = t.v[1].toFixed(2);
            this.enableY && (this.yPos.get() < this.options.posThreshold ? i > this.options.velThreshold ? this.slideDown(i) : this.slideUp(Math.abs(i)) : i < -this.options.velThreshold ? this.slideUp(Math.abs(i)) : this.slideDown(i))
        }.bind(this));
    };

    StoriesView.prototype.slideUp = function (t) {
        console.log("slide up");
        var i = this.options.spring;
        i.velocity = t, this.options.scrollOpts.paginated = !0, this.scrollview.setOptions(this.options.scrollOpts), this.yPos.set(0, i)
    };

    StoriesView.prototype.slideDown = function (t) {
        console.log("slide down");
        var i = this.options.spring;
        i.velocity = t, this.options.scrollOpts.paginated = !1, this.scrollview.setOptions(this.options.scrollOpts), this.yPos.set(this.options.initY, i)
    };

    StoriesView.prototype.render = function () {
        var t = this.yPos.get(),
            i = Utils.map(t, 0, this.options.initY, 1, this.options.cardScale);

        this.progress = Utils.map(t, this.options.initY, 0, 0, 1, !0);

        this.scrollview.sync.setOptions({
            direction: GenericSync.DIRECTION_X,
            scale: 1 / i
        });

        for (var e = 0; e < this.stories.length; e++) {
            this.stories[e].setProgress(this.progress);
        }

        this.spec = [];
        this.spec.push({
            origin: [.5, 1],
            transform: Matrix.scale(i, i, 1),
            target: {
                size: [window.innerWidth, window.innerHeight],
                target: this.scrollview.render()
            }
        });

        return this.spec;
    };

    //AppView

    var LightBox = require("famous-views/LightBox"),
        Time = require("famous-utils/Time");

    var CoverData = [
        {
            text: "Objects in the mirror are unluckier than they appear.",
            img: "covers/sochi.jpg",
            name: "Steve Kuzminski"
        },
        {
            text: "Kylie Wilson changed her profile picture",
            img: "covers/sochi.jpg",
            name: "Kylie Wilson"
        },
        {
            text: "Sick gifs from Sochi",
            img: "covers/sochi.jpg",
            name: "Chris Zimmerman"
        }
    ];

    Transitionable.registerMethod("spring", SpringTransition);

    //AppView
    function AppView() {
        View.apply(this, arguments);
        this.storiesView = new StoriesView;

        this.lightbox = new LightBox({
            inTransform: Matrix.identity,
            inOpacity: 0,
            inOrigin: [.5, .5],
            outTransform: Matrix.identity,
            outOpacity: 0,
            outOrigin: [.5, .5],
            showTransform: Matrix.identity,
            showOpacity: 1,
            showOrigin: [.5, .5],
            inTransition: {
                duration: 1e3
            },
            outTransition: {
                duration: 1e3
            },
            overlap: !0
        });

        this.covers = [];

        for (var t = 0; t < CoverData.length; t++) {
            var cover = new CoverView(CoverData[t]);
            this.covers.push(cover);
        }

        this.lightbox.show(this.covers[0]);
        var coverIndex = 0;
        Time.setInterval(function () {
            coverIndex++;

            if (coverIndex === this.covers.length)
                coverIndex = 0;

            this.lightbox.show(this.covers[coverIndex]);
        }.bind(this), 4e3);

        var e = new Modifier({
            transform: Matrix.translate(0, 0, -.1)
        });

        this._add(e).link(this.lightbox);
        this._add(this.storiesView);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;
    AppView.DEFAULT_OPTIONS = {};

    var Modifier = require('famous/Modifier');

    var Engine = require('famous/Engine');

    var FM = require('famous/Matrix');
    var Easing = require('famous-animation/Easing');

//    var AppView = require('./app/AppView');
//    s.App.AppView = t("app/AppView"),

    var Context = Engine.createContext();

    var appView = new AppView();

    Context.link(appView);
    Context.setPerspective(2000);
});