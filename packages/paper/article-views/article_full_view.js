Famous.loaded(function (require) {
        function ArticleFullView() {
            u.apply(this, arguments), o.call(this), n.call(this)
        }
        function o() {
            new r({
                size: [void 0, void 0],
                properties: {
                    backgroundColor: "white"
                }
            })
        }
        function n() {
            this.scrollview = new p(this.options.svOpts), this.content = new r({
                size: [320, 1080],
                classes: ["article", "content"],
                content: this.options.content,
                properties: {
                    backgroundColor: "white"
                }
            }), this.content.getSize = function() {
                return [320, 1080]
            }, this.scrollview.sequenceFrom([this.content]), this.mod = new a({
                transform: h.translate(0, -9999, 0)
            }), this._add(this.mod).link(this.scrollview)
        }
        var r = (require("famous/Engine"), require("famous/Surface")),
            a = (require("famous/ContainerSurface"), require("famous/Modifier")),
            h = (require("famous/RenderNode"), require("famous/Matrix")),
            u = require("famous/View"),
            p = require("famous-views/Scrollview");
        ArticleFullView.prototype = Object.create(u.prototype), ArticleFullView.prototype.constructor = ArticleFullView, ArticleFullView.DEFAULT_OPTIONS = {
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
                speedLimit: 10
            },
            boxShadow: null
        }, ArticleFullView.prototype.hide = function() {
            this.mod.setTransform(h.translate(0, -9999, 0))
        }, ArticleFullView.prototype.show = function() {
            this.mod.setTransform(h.translate(0, 0, 0))
        };

    Paper.ArticleFullView = ArticleFullView;
});