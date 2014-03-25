Famous.loaded(function (require) {
    function StoryView() {
        function t() {
            this.card = new o({
                properties: {
                    borderRadius: "5px",
                    backgroundColor: "white"
                }
            })
        }

        function i() {
            this.profilePicsView = new u({
                scale: this.options.scale,
                urls: this.options.profilePics
            })
        }

        function e() {
            this.nameView = new p({
                name: this.options.name
            })
        }

        function s() {
            this.options.text && (this.textView = new c({
                text: this.options.text,
                time: this.options.time,
                photos: !!this.options.photos
            }))
        }

        function n() {
            var t = this.options.photos;
            t && (this.photoImg = new Image, this.photoImg.src = t[0], this.photoImg.width = this.contentWidth, this.photo = new o({
                size: [this.contentWidth, this.contentWidth],
                content: this.photoImg,
                properties: {
                    boxShadow: "0 0 5px rgba(0,0,0,0.3)"
                }
            }))
        }

        function a() {
            this.footer = new l({
                likes: this.options.likes,
                comments: this.options.comments
            })
        }

        function h() {
            this.cover = new o, this.cover.pipe(this.eventOutput)
        }

        r.apply(this, arguments), this.contentWidth = window.innerWidth - 2 * this.options.margin, t.call(this), i.call(this), e.call(this), s.call(this), n.call(this), a.call(this), h.call(this)
    }

    var o = (require("famous/Engine"), require("famous/Surface")),
        n = (require("famous/Modifier"), require("famous/Matrix")),
        r = require("famous/View"),
        a = require("famous-animation/Easing"),
        h = (require("famous-views/Scrollview"), require("famous/ContainerSurface"), require("famous/Utility"), require("famous-utils/Utils")),
        u = Paper.ProfilePicsView,
        p = Paper.NameView,
        c = Paper.TextView,
        l = Paper.FooterView;
    StoryView.prototype = Object.create(r.prototype), StoryView.prototype.constructor = StoryView, StoryView.DEFAULT_OPTIONS = {
        scale: null,
        name: null,
        profilePics: null,
        text: null,
        photos: null,
        time: null,
        likes: null,
        comments: null,
        margin: 20
    }, StoryView.prototype.getSize = function () {
    }, StoryView.prototype.setProgress = function (t) {
        this.progress = t
    }, StoryView.prototype.map = function (t, i, e) {
        return h.map(this.progress, 0, 1, t, i, e)
    }, StoryView.prototype.render = function () {
        {
            var t = this.map(120, 85),
                i = this.map(140, 105),
                e = this.map(-20, -68);
            this.map(48, 0), this.map(1 / 3 / this.options.scale, .5)
        }
        return this.profilePicsView.setProgress(this.progress), this.nameView.fade(this.progress), this.textView.fade(this.progress), this.spec = [], this.spec.push(this.card.render()), this.spec.push({
            transform: n.translate(this.options.margin, this.options.margin, 0),
            target: this.profilePicsView.render()
        }), this.spec.push({
            transform: n.translate(this.options.margin, t, 0),
            target: this.nameView.render()
        }), this.textView && this.spec.push({
            transform: n.translate(this.options.margin, i, 0),
            size: [this.options.contentWidth, window.innerHeight - i - this.options.margin],
            target: {
                target: this.textView.render()
            }
        }), this.photo && this.spec.push({
            origin: [.5, 1],
            transform: n.translate(0, e, .1),
            target: this.photo.render()
        }), this.spec.push({
            transform: n.translate(this.options.margin, window.innerHeight - this.footer.getSize()[1], 0),
            opacity: a.inOutQuadNorm.call(this, this.progress),
            target: this.footer.render()
        }), this.spec.push({
            transform: n.translate(0, 0, 2),
            target: this.cover.render()
        }), this.spec
    }

    Paper.StoryView = StoryView;
});