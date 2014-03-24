Famous.loaded(function (t) {
        function ArticleStoryView() {
            function t() {
                this.pos = new u(0), this.sync = new h(function() {
                    return this.pos.get()
                }.bind(this), {
                    direction: c.Direction.Y
                }), this.sync.on("update", function(t) {
                    this.closed = !1, 1 === this.progress && (this.open && this.article.atTop && t.v > 0 && (this.articleScale.set(.875, this.options.curve), this.articleTop.set(-68, this.options.curve)), this.article.atTop && t.v > 0 && (this.article.disableScroll(), this.open = !1), this.open || this.pos.set(t.p))
                }.bind(this)), this.sync.on("end", function(t) {
                    console.log(this.angle, t.v), this.angle < Math.PI / 2 ? t.v > this.options.velThreshold && this.article.atTop ? this.flipClose() : this.flipOpen() : t.v < -this.options.velThreshold ? this.flipOpen() : this.flipClose()
                }.bind(this))
            }
            function i() {
                this.card = new o({
                    properties: {
                        borderRadius: "5px",
                        backgroundColor: "white"
                    }
                }), this.card.pipe(this.eventOutput)
            }
            function e() {
                this.profilePicsView = new f({
                    scale: this.options.scale,
                    urls: this.options.profilePics
                }), this.profilePicsView.pipe(this.eventOutput)
            }
            function s() {
                this.nameView = new d({
                    name: this.options.name
                }), this.nameView.pipe(this.eventOutput)
            }
            function n() {
                this.options.text && (this.textView = new m({
                    text: this.options.text,
                    time: this.options.time,
                    photos: !0
                }), this.textView.pipe(this.eventOutput))
            }
            function a() {
                this.article = new y({
                    scale: this.options.scale,
                    content: this.options.content,
                    thumbSm: this.options.thumbSm,
                    thumbLg: this.options.thumbLg
                }), this.article.pipe(this.eventOutput), this.articleScale = new u(.875), this.articleTop = new u(-68)
            }
            function p() {
                this.footer = new v({
                    likes: this.options.likes,
                    comments: this.options.comments
                }), this.footer.pipe(this.eventOutput)
            }
            r.apply(this, arguments), this.flipable = !0, this.closed = !0, this.contentWidth = window.innerWidth - 2 * this.options.margin, t.call(this), i.call(this), e.call(this), s.call(this), n.call(this), a.call(this), p.call(this)
        }
        var o = (t("famous/Engine"), t("famous/Surface")),
            n = (t("famous/Modifier"), t("famous/Matrix")),
            r = t("famous/View"),
            a = t("famous-animation/Easing"),
            h = t("famous-sync/GenericSync"),
            u = t("famous/Transitionable"),
            p = t("famous-physics/utils/SpringTransition"),
            c = (t("famous-views/Scrollview"), t("famous/ContainerSurface"), t("famous/Utility")),
            l = t("famous-utils/Utils"),
            f = t("app/StoryViews/ProfilePicsView"),
            d = t("app/StoryViews/NameView"),
            m = t("app/StoryViews/TextView"),
            y = t("app/ArticleViews/ArticleView"),
            v = t("app/StoryViews/FooterView");
        u.registerMethod("spring", p), ArticleStoryView.prototype = Object.create(r.prototype), ArticleStoryView.prototype.constructor = ArticleStoryView, ArticleStoryView.DEFAULT_OPTIONS = {
            scale: null,
            name: null,
            profilePics: null,
            text: null,
            content: null,
            thumbSm: null,
            thumbLg: null,
            time: null,
            likes: null,
            comments: null,
            margin: 20,
            curve: {
                duration: 200,
                curve: "easeInOut"
            },
            velThreshold: 1
        }, ArticleStoryView.prototype.getSize = function() {}, ArticleStoryView.prototype.setProgress = function(t) {
            this.progress = t
        }, ArticleStoryView.prototype.map = function(t, i, e) {
            return l.map(this.progress, 0, 1, t, i, e)
        }, ArticleStoryView.prototype.enableFlip = function() {
            this.article.pipe(this.sync)
        }, ArticleStoryView.prototype.disableFlip = function() {
            this.article.unpipe(this.sync)
        }, ArticleStoryView.prototype.flipOpen = function() {
            this.pos.set(-320, this.options.curve), this.articleScale.set(1, this.options.curve), this.articleTop.set(0, this.options.curve), this.closed = !1, this.open = !0, this.article.enableScroll(), this.article.enable = !0
        }, ArticleStoryView.prototype.flipClose = function() {
            this.pos.set(0, this.options.curve, function() {
                this.article.enable = !1, this.closed = !0
            }.bind(this)), this.articleScale.set(.875, this.options.curve), this.articleTop.set(-68, this.options.curve)
        }, ArticleStoryView.prototype.render = function() {
            var t = this.pos.get();
            this.angle = l.map(t, 0, -320, Math.PI, 0, !0), this.article.setAngle(this.angle); {
                var i = this.articleScale.get(),
                    e = this.map(120, 85),
                    s = this.map(140, 105),
                    o = this.map(-20, this.articleTop.get());
                this.map(48, 0), this.map(1 / 3 / this.options.scale, .5)
            }
            return this.profilePicsView.setProgress(this.progress), this.nameView.fade(this.progress), this.textView.fade(this.progress), this.open = 0 === this.angle, this.open ? this.article.articleBottom.noShadow() : this.article.articleBottom.shadow(), this.spec = [], this.spec.push(this.card.render()), this.spec.push({
                transform: n.translate(this.options.margin, this.options.margin, 0),
                target: this.profilePicsView.render()
            }), this.spec.push({
                transform: n.translate(this.options.margin, e, 0),
                target: this.nameView.render()
            }), this.textView && this.spec.push({
                transform: n.translate(this.options.margin, s, 0),
                size: [this.options.contentWidth, window.innerHeight - s - this.options.margin],
                target: {
                    target: this.textView.render()
                }
            }), this.spec.push({
                origin: [.5, 0],
                transform: n.move(n.scale(i, i, 1), [0, o, 1e-4]),
                size: [window.innerWidth, window.innerHeight],
                target: {
                    target: this.article.render()
                }
            }), this.spec.push({
                transform: n.translate(this.options.margin, window.innerHeight - this.footer.getSize()[1], 0),
                opacity: a.inOutQuadNorm.call(this, this.progress),
                target: this.footer.render()
            }), this.spec
        };

    Paper.ArticleStoryView = ArticleStoryView;
});