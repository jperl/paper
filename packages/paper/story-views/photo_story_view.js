Famous.loaded(function (require) {
        function PhotoStoryView() {
            function t() {
                this.card = new o({
                    properties: {
                        borderRadius: "5px",
                        backgroundColor: "white"
                    }
                }), this.card.pipe(this.eventOutput)
            }
            function i() {
                this.content.push(new o({
                    size: [void 0, this.options.margin]
                })), this.profilePicsView = new c({
                    scale: this.options.scale,
                    urls: this.options.profilePics
                }), this.content.push(this.profilePicsView);
                var t = new r;
                t.getSize = function() {
                    return [void 0, 5 * this.map(2, 1)]
                }.bind(this), this.content.push(t)
            }
            function e() {
                this.nameView = new l({
                    name: this.options.name
                }), this.content.push(this.nameView)
            }
            function s() {
                this.options.text && (this.textView = new f({
                    text: this.options.text,
                    time: this.options.time,
                    photos: !! this.options.photos
                }), this.content.push(this.textView))
            }
            function a() {
                for (var t = 0; t < this.options.photos.length; t++) {
                    this.photoImg = new Image, this.photoImg.src = this.options.photos[t], this.photoImg.width = this.contentWidth;
                    var i = new o({
                        size: [this.contentWidth, this.contentWidth],
                        content: this.photoImg,
                        properties: {
                            boxShadow: "0 0 5px rgba(0,0,0,0.3)"
                        }
                    });
                    if (2 > t) {
                        var e = new r,
                            s = this["mod" + t] = new n;
                        e.link(s).link(i), this.content.push(e), e.getSize = function() {
                            return [280, 280]
                        }
                    } else this.content.push(i);
                    this.content.push(new o({
                        size: [void 0, 15]
                    }))
                }
            }
            function p() {
                this.footer = new d({
                    likes: this.options.likes,
                    comments: this.options.comments
                }), this.content.push(this.footer)
            }
            function m() {
                this.scrollview = new u({
                    itemSpacing: 0,
                    clipSize: void 0,
                    margin: window.innerHeight,
                    drag: .001,
                    edgeGrip: 1,
                    edgePeriod: 300,
                    paginated: !1,
                    speedLimit: 10
                }), this.scrollview.sequenceFrom(this.content), this.firstNode = this.scrollview.node
            }
            function y() {
                this.cover = new o, this.cover.pipe(this.eventOutput), this.cover.on("touchstart", function() {
                    this.touch = !0, this.scrollview.setVelocity(0)
                }.bind(this)), this.cover.on("touchend", function() {
                    this.touch = !1
                }.bind(this))
            }
            h.apply(this, arguments), this.contentWidth = window.innerWidth - 2 * this.options.margin, this.scrollable = !0, this.content = [], t.call(this), i.call(this), e.call(this), s.call(this), a.call(this), p.call(this), m.call(this), y.call(this)
        }
        var o = (require("famous/Engine"), require("famous/Surface")),
            n = require("famous/Modifier"),
            r = require("famous/RenderNode"),
            a = require("famous/Matrix"),
            h = require("famous/View"),
            u = (require("famous-animation/Easing"), require("famous-views/Scrollview")),
            p = (require("famous/ContainerSurface"), require("famous/Utility"), require("famous-utils/Utils")),
            c = Paper.ProfilePicsView,
            l = Paper.NameView,
            f = Paper.TextView,
            d = Paper.FooterView;
        PhotoStoryView.prototype = Object.create(h.prototype), PhotoStoryView.prototype.constructor = PhotoStoryView, PhotoStoryView.DEFAULT_OPTIONS = {
            scale: null,
            name: null,
            profilePics: null,
            text: null,
            photos: null,
            time: null,
            likes: null,
            comments: null,
            margin: 20
        }, PhotoStoryView.prototype.getSize = function() {}, PhotoStoryView.prototype.setProgress = function(t) {
            this.progress = t
        }, PhotoStoryView.prototype.map = function(t, i, e) {
            return p.map(this.progress, 0, 1, t, i, e)
        }, PhotoStoryView.prototype.enableScroll = function() {
            this.cover.pipe(this.scrollview), this.enable = !0
        }, PhotoStoryView.prototype.disableScroll = function() {
            this.cover.unpipe(this.scrollview), this.enable = !1
        }, PhotoStoryView.prototype.sequence = function() {
            console.log("sequence"), this.scrollview.setVelocity(0), this.scrollview.setPosition(0), this.scrollview.sequenceFrom(this.firstNode)
        }, PhotoStoryView.prototype.render = function() {
            this.map(120, 85), this.map(140, 105), this.map(-20, -68), this.map(48, 0);
            this.profilePicsView.setProgress(this.progress), this.nameView.setProgress(this.progress), this.nameView.fade(this.progress), this.textView.fade(this.progress), this.spec = [], this.spec.push(this.card.render());
            var t = this.scrollview.getPosition();
            return this.top = 10 > t && 0 === this.scrollview.node.index ? !0 : !1, this.mod0.setTransform(a.translate(0, this.map(0, 0), 1e-5)), this.mod1.setTransform(a.move(a.rotateZ(this.map(-.04, 0)), [this.map(-6, 0), this.map(-290, 0), 0])), this.spec.push({
                transform: a.translate(20, 0, 0),
                target: this.scrollview.render()
            }), this.spec.push({
                transform: a.translate(0, 0, 2),
                target: this.cover.render()
            }), this.spec
        }

    Paper.PhotoStoryView = PhotoStoryView;
});