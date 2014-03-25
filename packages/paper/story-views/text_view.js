Famous.loaded(function (require) {
        function TextView() {
            h.apply(this, arguments), o.call(this), n.call(this)
        }
        function o() {
            var t = this.options.text;
            this.options.photos ? (properties = this.options.smallSmall, smallOrigin = this.options.originSm) : t.length < 40 ? (properties = this.options.smallLarge, smallOrigin = this.options.originLg) : t.length < 280 ? (properties = this.options.smallMedium, smallOrigin = this.options.originMed) : (properties = this.options.smallSmall, smallOrigin = this.options.originSm), this.smallText = new r({
                size: [this.options.width, window.innerHeight * this.options.height],
                content: '<span class="story-text">' + t + "</span>",
                properties: properties
            }), this.smallMod = new a({
                origin: [0, smallOrigin]
            }), this._add(this.smallMod).link(this.smallText), this.smallText.pipe(this.eventOutput)
        }
        function n() {
            var t = this.options.text;
            this.options.photos ? (properties = this.options.largeSmall, largeOrigin = this.options.originSm) : t.length < 40 ? (properties = this.options.largeLarge, largeOrigin = this.options.originLg) : t.length < 280 ? (properties = this.options.largeMedium, largeOrigin = this.options.originMed) : (properties = this.options.largeSmall, largeOrigin = this.options.originSm), this.largeText = new r({
                size: [this.options.width, window.innerHeight * this.options.height],
                content: '<span class="story-text">' + t + '</span><p class="story-time">' + this.options.time + "</p>",
                properties: properties
            }), this.largeMod = new a({
                origin: [0, largeOrigin]
            }), this._add(this.largeMod).link(this.largeText), this.largeText.pipe(this.eventOutput)
        }
        var r = require("famous/Surface"),
            a = require("famous/Modifier"),
            h = (require("famous/Matrix"), require("famous/View")),
            u = require("famous-animation/Easing");
        TextView.prototype = Object.create(h.prototype), TextView.prototype.constructor = TextView, TextView.DEFAULT_OPTIONS = {
            width: 280,
            height: .3,
            text: null,
            time: null,
            photos: null,
            smallLarge: {
                fontSize: "31px",
                lineHeight: "35px"
            },
            smallMedium: {
                fontSize: "28px",
                lineHeight: "32px"
            },
            smallSmall: {
                fontSize: "21px",
                lineHeight: "25px"
            },
            largeLarge: {
                fontSize: "28px",
                lineHeight: "32px"
            },
            largeMedium: {
                fontSize: "20px",
                lineHeight: "24px"
            },
            largeSmall: {
                fontSize: "15px",
                lineHeight: "19px"
            },
            originLg: .45,
            originMed: .35,
            originSm: .01
        }, TextView.prototype.fade = function(t) {
            this.smallMod.setOpacity(u.inOutQuadNorm.call(this, 1 - t)), this.largeMod.setOpacity(u.inOutQuadNorm.call(this, t))
        }, TextView.prototype.getSize = function() {
            return [280, 60]
        };

    Paper.TextView = TextView;
});