Famous.loaded(function (require) {
        function ArticleBottomView() {
            p.apply(this, arguments), o.call(this), n.call(this)
        }
        function o() {
            this.backing = new r({
                size: [320, 320],
                properties: {
                    backgroundColor: "white",
                    boxShadow: this.options.boxShadow
                }
            });
            var t = new h({
                origin: [0, 0]
            });
            this._add(t).link(this.backing)
        }
        function n() {
            this.scrollview = new c(this.options.svOpts), this.content = new r({
                size: [320, 1068],
                classes: ["article", "content"],
                content: this.options.content,
                properties: {
                    backgroundColor: "white"
                }
            }), this.content.getSize = function() {
                return [320, 1068]
            }, this.content.pipe(this.eventOutput), this.scrollview.sequenceFrom([this.content]), this.svMod = new h({
                origin: [.5, 0],
                transform: u.translate(0, -320, 0)
            }), this.container = new a({
                size: [void 0, 320],
                properties: {
                    overflow: "hidden"
                }
            }), this.container.add(this.svMod).link(this.scrollview), this.contMod = new h, this._add(this.contMod).link(this.container)
        }
        var r = (require("famous/Engine"), require("famous/Surface")),
            a = require("famous/ContainerSurface"),
            h = require("famous/Modifier"),
            u = (require("famous/RenderNode"), require("famous/Matrix")),
            p = require("famous/View"),
            c = require("famous-views/Scrollview");
        ArticleBottomView.prototype = Object.create(p.prototype), ArticleBottomView.prototype.constructor = ArticleBottomView, ArticleBottomView.DEFAULT_OPTIONS = {
            scale: null,
            thumbCoverSm: null,
            thumbCoverLg: null,
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
        }, ArticleBottomView.prototype.setAngle = function() {
            this.contMod.setTransform(u.rotateX(0))
        }, ArticleBottomView.prototype.enableScroll = function() {
            this.content.pipe(this.scrollview)
        }, ArticleBottomView.prototype.disableScroll = function() {
            this.content.unpipe(this.scrollview)
        }, ArticleBottomView.prototype.noShadow = function() {
            this.backing.setProperties({
                boxShadow: ""
            })
        }, ArticleBottomView.prototype.shadow = function() {
            this.backing.setProperties({
                boxShadow: this.options.boxShadow
            })
        };

        Paper.ArticleBottomView = ArticleBottomView;
});