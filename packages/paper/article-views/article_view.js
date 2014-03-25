Famous.loaded(function (require) {
    function ArticleView() {
        function t() {
            this.articleTop = new h(this.options), this.articleTop.pipe(this.eventOutput)
        }

        function i() {
            this.articleBottom = new u(this.options), this.articleBottom.pipe(this.eventOutput), this.articleBottom.content.pipe(this.articleTop.scrollview)
        }

        function e() {
            this.cover = new o, this.cover.pipe(this.eventOutput), this.cover.pipe(this.articleTop.scrollview), this.cover.pipe(this.articleBottom.scrollview), this.cover.on("touchstart", function () {
                this.touch = !0
            }.bind(this)), this.cover.on("touchend", function () {
                this.touch = !1
            }.bind(this))
        }

        r.apply(this, arguments), this.contentWidth = window.innerWidth - 2 * this.options.margin, t.call(this), i.call(this), e.call(this)
    }

    var o = (require("famous/Engine"), require("famous/Surface")),
        n = (require("surface-extensions/ExpandingSurface"), require("famous/Modifier"), require("famous/RenderNode"), require("famous/Matrix")),
        r = require("famous/View"),
        a = (require("famous-animation/Easing"), require("famous/ContainerSurface"), require("famous/Transitionable"), require("famous-views/Scrollview"), require("famous/ContainerSurface"), require("famous/Utility"), require("famous-utils/Utils")),
        h = (require("famous/EventHandler"), Paper.ArticleTopView),
        u = Paper.ArticleBottomView;
    ArticleView.prototype = Object.create(r.prototype), ArticleView.prototype.constructor = ArticleView, ArticleView.DEFAULT_OPTIONS = {
        scale: null,
        content: null,
        thumbSm: null,
        thumbLg: null,
        margin: 20,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
    }, ArticleView.prototype.getSize = function () {
    }, ArticleView.prototype.setProgress = function (t) {
        this.progress = t
    }, ArticleView.prototype.map = function (t, i, e) {
        return a.map(this.progress, 0, 1, t, i, e)
    }, ArticleView.prototype.enableScroll = function () {
        this.articleTop.enableScroll(), this.articleBottom.enableScroll()
    }, ArticleView.prototype.disableScroll = function () {
        this.articleTop.disableScroll(), this.articleBottom.disableScroll()
    }, ArticleView.prototype.sequence = function () {
        console.log("sequence")
    }, ArticleView.prototype.setAngle = function (t) {
        this.angle = t
    }, ArticleView.prototype.render = function () {
        return this.articleTop.setAngle(this.angle), this.articleBottom.setAngle(this.angle), this.atTop = Math.abs(this.articleTop.scrollview.getPosition()) < 5, this.spec = [], this.spec.push({
            transform: n.translate(0, 0, 0),
            target: this.articleTop.render()
        }), this.spec.push({
            transform: n.translate(0, 320, 0),
            target: this.articleBottom.render()
        }), this.enable && this.spec.push({
            transform: n.translate(0, 0, 500),
            target: this.cover.render()
        }), this.spec
    }

    Paper.ArticleView = ArticleView;
});