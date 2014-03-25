Famous.loaded(function (require) {
        function ArticleTopView() {
            c.apply(this, arguments), o.call(this), n.call(this), r.call(this)
        }
        function o() {
            this.container = new h({
                size: [void 0, 320],
                properties: {
                    overflow: "hidden"
                }
            }), this.container.pipe(this.eventOutput)
        }
        function n() {
            this.coverLgImg = new Image, this.coverLgImg.src = this.options.thumbLg, this.coverLgImg.width = 320, this.coverLg = new a({
                size: [320, 274],
                content: this.coverLgImg,
                properties: {}
            }), this.thumbLgMod = new u, this.coverLg.pipe(this.eventOutput), this._add(this.thumbLgMod).link(this.coverLg)
        }
        function r() {
            this.scrollview = new l(this.options.svOpts), this.content = new a({
                size: [320, 1068],
                classes: ["article", "content"],
                content: this.options.content,
                properties: {
                    backgroundColor: "white"
                }
            }), this.content.getSize = function() {
                return [320, 1068]
            }, this.content.pipe(this.scrollview), this.scrollview.sequenceFrom([this.content]);
            var t = new u({
                origin: [.5, 0]
            });
            this.container.add(t).link(this.scrollview), this.contMod = new u, this._add(this.contMod).link(this.container)
        }
        var a = (require("famous/Engine"), require("famous/Surface")),
            h = require("famous/ContainerSurface"),
            u = require("famous/Modifier"),
            p = (require("famous/RenderNode"), require("famous/Matrix")),
            c = require("famous/View"),
            l = require("famous-views/Scrollview");
        ArticleTopView.prototype = Object.create(c.prototype), ArticleTopView.prototype.constructor = ArticleTopView, ArticleTopView.DEFAULT_OPTIONS = {
            scale: null,
            thumbSm: null,
            thumbLg: null,
            content: null,
            svOpts: {
                itemSpacing: 0,
                clipSize: window.innerHeight,
                margin: window.innerHeight,
                drag: .001,
                edgeGrip: 1,
                edgePeriod: 300,
                speedLimit: 1
            },
            boxShadow: null
        }, ArticleTopView.prototype.setAngle = function(t) {
            this.contMod.setTransform(p.aboutOrigin([0, 320, 0], p.rotateX(-t))), this.thumbLgMod.setTransform(p.moveThen([0, 320, .01], p.aboutOrigin([0, 320, 0], p.rotate(-t + Math.PI, 0, 0))))
        }, ArticleTopView.prototype.enableScroll = function() {
            this.content.pipe(this.scrollview)
        }, ArticleTopView.prototype.disableScroll = function() {
            this.content.unpipe(this.scrollview)
        };

    Paper.ArticleTopView = ArticleTopView;
});