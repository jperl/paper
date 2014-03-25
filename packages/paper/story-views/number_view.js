Famous.loaded(function (require) {
    function NumberView() {
        u.apply(this, arguments), o.call(this), n.call(this)
    }

    function o() {
        this.lowNum = new r({
            size: [this.options.size, this.options.size],
            content: "+" + (this.options.n - 1),
            classes: ["number-view", "profile-view"]
        }), this.lowMod = new a, this._add(this.lowMod).link(this.lowNum)
    }

    function n() {
        this.highNum = new r({
            size: [this.options.size, this.options.size],
            content: "+" + this.options.n,
            classes: ["number-view", "profile-view"]
        }), this.highMod = new a, this._add(this.highMod).link(this.highNum)
    }

    {
        var r = require("famous/Surface"),
            a = require("famous/Modifier"),
            h = require("famous/Matrix"),
            u = require("famous/View"),
            p = require("famous-animation/Easing");
        require("famous-utils/Utils")
    }

    NumberView.prototype = Object.create(u.prototype), NumberView.prototype.constructor = NumberView, NumberView.DEFAULT_OPTIONS = {
        n: null,
        size: 121
    }, NumberView.prototype.fade = function (t) {
        this.highMod.setOpacity(p.inOutQuadNorm.call(this, 1 - t)), this.lowMod.setOpacity(p.inOutQuadNorm.call(this, t))
    }, NumberView.prototype.setScale = function (t) {
        this.scale = t, this.lowMod.setTransform(h.scale(t, t, 1)), this.highMod.setTransform(h.scale(t, t, 1))
    }, NumberView.prototype.getSize = function () {
        return [this.options.size * this.scale, this.options.size * this.scale]
    };

    Paper.NumberView = NumberView;
});