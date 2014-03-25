Famous.loaded(function (require) {
        function NameView() {
            u.apply(this, arguments), o.call(this), n.call(this)
        }
        function o() {
            this.smallName = new r({
                size: [this.options.width, void 0],
                content: "<div>" + this.options.name + "</div>",
                classes: ["story-name"],
                properties: {
                    fontSize: "20px"
                }
            }), this.smallMod = new a, this._add(this.smallMod).link(this.smallName)
        }
        function n() {
            this.largeName = new r({
                size: [this.options.width, void 0],
                content: "<div>" + this.options.name + "</div>",
                classes: ["story-name"],
                properties: {
                    fontSize: "15px"
                }
            }), this.largeMod = new a({
                transform: h.translate(0, 2, 0)
            }), this._add(this.largeMod).link(this.largeName)
        }
        var r = (require("famous/Surface"), require("surface-extensions/ExpandingSurface")),
            a = require("famous/Modifier"),
            h = require("famous/Matrix"),
            u = require("famous/View"),
            p = require("famous-animation/Easing"),
            c = require("famous-utils/Utils");
        NameView.prototype = Object.create(u.prototype), NameView.prototype.constructor = NameView, NameView.DEFAULT_OPTIONS = {
            width: 280,
            height: 15,
            name: null
        }, NameView.prototype.fade = function(t) {
            this.smallMod.setOpacity(p.inOutQuadNorm.call(this, 1 - t)), this.largeMod.setOpacity(p.inOutQuadNorm.call(this, t))
        }, NameView.prototype.setProgress = function(t) {
            this.progress = t
        }, NameView.prototype.getSize = function() {
            return [this.options.width, c.map(this.progress, 0, 1, this.smallName.getSize()[1], this.largeName.getSize()[1]) - 2]
        }

    Paper.NameView = NameView;
});