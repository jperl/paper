Famous.loaded(function (require) {
    function ProfilePicsView() {
        r.apply(this, arguments), this.mods = [], this.picViews = [];
        for (var t = 0; t < Math.min(this.options.urls.length, 3); t++) {
            var i = new u({
                    url: this.options.urls[t]
                }),
                e = new o;
            this.mods.push(e), this.picViews.push(i), this._add(e).link(i), i.pipe(this.eventOutput)
        }
        this.options.urls.length > 3 && (this.numView = new p({
            n: this.options.urls.length - 2
        }), this.numMod = new o, this._add(this.numMod).link(this.numView))
    }

    var o = (require("famous/Surface"), require("famous/Modifier")),
        n = require("famous/Matrix"),
        r = require("famous/View"),
        a = require("famous-animation/Easing"),
        h = require("famous-utils/Utils"),
        u = Paper.ProfilePicView,
        p = Paper.NumberView;
    ProfilePicsView.prototype = Object.create(r.prototype), ProfilePicsView.prototype.constructor = ProfilePicsView, ProfilePicsView.DEFAULT_OPTIONS = {
        scale: null,
        urls: null,
        spacing: 5,
        size: 120
    }, ProfilePicsView.prototype.map = function (t, i, e) {
        return h.map(this.progress, 0, 1, t, i, e)
    }, ProfilePicsView.prototype.setProgress = function (t) {
        this.progress = t, this.scale = this.map(1 / 3 / this.options.scale, .5);
        for (var i = 0; i < this.mods.length; i++) this.picViews[i].setScale(this.scale), this.mods[i].setTransform(n.translate((this.options.size * this.scale + this.options.spacing) * i, 0, 0));
        this.options.urls.length > 3 && (this.mods[2].setOpacity(a.outQuadNorm.call(this, t)), this.mods[2].setTransform(n.move(n.scale(this.progress, 1, 1), [2 * (this.options.size * this.scale + this.options.spacing), 0, 0])), this.numView.setScale(this.scale), this.numView.fade(this.progress), this.numMod.setTransform(n.translate((this.options.size * this.scale + this.options.spacing) * (2 + this.progress), 0, 0)))
    }, ProfilePicsView.prototype.getSize = function () {
        return [void 0, this.options.size * this.scale]
    };

    Paper.ProfilePicsView = ProfilePicsView;
});