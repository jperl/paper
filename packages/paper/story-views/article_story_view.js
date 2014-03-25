Famous.loaded(function (require) {
    function ArticleStoryView() {
        function t() {
            this.pos = new Transitionable(0), this.sync = new GenericSync(function () {
                return this.pos.get()
            }.bind(this), {
                direction: Utility.Direction.Y
            }), this.sync.on("update", function (t) {
                this.closed = false, 1 === this.progress && (this.open && this.article.atTop && t.v > 0 && (this.articleScale.set(.875, this.options.curve), this.articleTop.set(-68, this.options.curve)), this.article.atTop && t.v > 0 && (this.article.disableScroll(), this.open = false), this.open || this.pos.set(t.p))
            }.bind(this)), this.sync.on("end", function (t) {
                console.log(this.angle, t.v), this.angle < Math.PI / 2 ? t.v > this.options.velThreshold && this.article.atTop ? this.flipClose() : this.flipOpen() : t.v < -this.options.velThreshold ? this.flipOpen() : this.flipClose()
            }.bind(this))
        }

        function i() {
            this.card = new Surface({
                properties: {
                    borderRadius: "5px",
                    backgroundColor: "white"
                }
            });

            this.card.pipe(this.eventOutput);
        }

        function e() {
            this.profilePicsView = new ProfilePicsView({
                scale: this.options.scale,
                urls: this.options.profilePics
            });

            this.profilePicsView.pipe(this.eventOutput);
        }

        function s() {
            this.nameView = new NameView({
                name: this.options.name
            });

            this.nameView.pipe(this.eventOutput);
        }

        function n() {
            if (this.options.text) {
                this.textView = new TextView({
                    text: this.options.text,
                    time: this.options.time,
                    photos: true
                });

                this.textView.pipe(this.eventOutput);
            }
        }

        function a() {
            this.article = new ArticleView({
                scale: this.options.scale,
                content: this.options.content,
                thumbSm: this.options.thumbSm,
                thumbLg: this.options.thumbLg
            });
            this.article.pipe(this.eventOutput);
            this.articleScale = new Transitionable(.875);
            this.articleTop = new Transitionable(-68);
        }

        function p() {
            this.footer = new FooterView({
                likes: this.options.likes,
                comments: this.options.comments
            });

            this.footer.pipe(this.eventOutput);
        }

        View.apply(this, arguments);
        this.flipable = true;
        this.closed = true;
        this.contentWidth = window.innerWidth - 2 * this.options.margin;

        t.call(this);
        i.call(this);
        e.call(this);
        s.call(this);
        n.call(this);
        a.call(this);
        p.call(this);
    }

    var Surface = require("famous/Surface"),
        Matrix = require("famous/Matrix"),
        View = require("famous/View"),
        Easing = require("famous-animation/Easing"),
        GenericSync = require("famous-sync/GenericSync"),
        Transitionable = require("famous/Transitionable"),
        SpringTransition = require("famous-physics/utils/SpringTransition"),
        Utility = require("famous/Utility"),
        Utils = require("famous-utils/Utils"),
        ProfilePicsView = Paper.ProfilePicsView,
        NameView = Paper.NameView,
        TextView = Paper.TextView,
        ArticleView = Paper.ArticleView,
        FooterView = Paper.FooterView;

    Transitionable.registerMethod("spring", SpringTransition);
    ArticleStoryView.prototype = Object.create(View.prototype);
    ArticleStoryView.prototype.constructor = ArticleStoryView;
    ArticleStoryView.DEFAULT_OPTIONS = {
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
    };
    ArticleStoryView.prototype.getSize = function () {
    };
    ArticleStoryView.prototype.setProgress = function (t) {
        this.progress = t
    };
    ArticleStoryView.prototype.map = function (t, i, e) {
        return Utils.map(this.progress, 0, 1, t, i, e);
    };
    ArticleStoryView.prototype.enableFlip = function () {
        this.article.pipe(this.sync);
    };
    ArticleStoryView.prototype.disableFlip = function () {
        this.article.unpipe(this.sync);
    };
    ArticleStoryView.prototype.flipOpen = function () {
        this.pos.set(-320, this.options.curve);
        this.articleScale.set(1, this.options.curve);
        this.articleTop.set(0, this.options.curve);
        this.closed = false;
        this.open = true;
        this.article.enableScroll();
        this.article.enable = true;
    };

    ArticleStoryView.prototype.flipClose = function () {
        this.pos.set(0, this.options.curve, function () {
            this.article.enable = false;
            this.closed = true;
        }.bind(this));

        this.articleScale.set(.875, this.options.curve);
        this.articleTop.set(-68, this.options.curve);
    };

    ArticleStoryView.prototype.render = function () {
        var t = this.pos.get();
        this.angle = Utils.map(t, 0, -320, Math.PI, 0, true);

        this.article.setAngle(this.angle);

        var articleScale = this.articleScale.get(),
            e = this.map(120, 85),
            s = this.map(140, 105),
            o = this.map(-20, this.articleTop.get());

        this.map(48, 0);
        this.map(1 / 3 / this.options.scale, .5);

        this.profilePicsView.setProgress(this.progress);
        this.nameView.fade(this.progress);
        this.textView.fade(this.progress);

        this.open = 0 === this.angle;

        this.open ? this.article.articleBottom.noShadow() : this.article.articleBottom.shadow();
        this.spec = [];
        this.spec.push(this.card.render());

        this.spec.push({
            transform: Matrix.translate(this.options.margin, this.options.margin, 0),
            target: this.profilePicsView.render()
        });

        this.spec.push({
            transform: Matrix.translate(this.options.margin, e, 0),
            target: this.nameView.render()
        });

        this.textView && this.spec.push({
            transform: Matrix.translate(this.options.margin, s, 0),
            size: [this.options.contentWidth, window.innerHeight - s - this.options.margin],
            target: {
                target: this.textView.render()
            }
        });

        this.spec.push({
            origin: [.5, 0],
            transform: Matrix.move(Matrix.scale(articleScale, articleScale, 1), [0, o, 1e-4]),
            size: [window.innerWidth, window.innerHeight],
            target: {
                target: this.article.render()
            }
        });

        this.spec.push({
            transform: Matrix.translate(this.options.margin, window.innerHeight - this.footer.getSize()[1], 0),
            opacity: Easing.inOutQuadNorm.call(this, this.progress),
            target: this.footer.render()
        });

        return this.spec;
    };

    Paper.ArticleStoryView = ArticleStoryView;
});