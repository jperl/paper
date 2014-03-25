Famous.loaded(function (require) {
    var Surface = (require("famous/Engine"), require("famous/Surface")),
        Matrix = (require("famous/Modifier"), require("famous/Matrix")),
        View = require("famous/View"),
        Easing = require("famous-animation/Easing"),
        Utils = (require("famous-views/Scrollview"), require("famous/ContainerSurface"), require("famous/Utility"), require("famous-utils/Utils")),
        ProfilePicsView = Paper.ProfilePicsView,
        NameView = Paper.NameView,
        TextView = Paper.TextView,
        FooterView = Paper.FooterView;

    function StoryView() {
        View.apply(this, arguments);
        this.contentWidth = window.innerWidth - 2 * this.options.margin;

        this.card = new Surface({
            properties: {
                borderRadius: "5px",
                backgroundColor: "white"
            }
        })

        this.profilePicsView = new ProfilePicsView({
            scale: this.options.scale,
            urls: this.options.profilePics
        })

        this.nameView = new NameView({
            name: this.options.name
        })

        this.options.text && (this.textView = new TextView({
            text: this.options.text,
            time: this.options.time,
            photos: !!this.options.photos
        }))

        var photos = this.options.photos;
        if (photos) {
            this.photoImg = new Image;
            this.photoImg.src = photos[0];
            this.photoImg.width = this.contentWidth;
            this.photo = new Surface({
                size: [this.contentWidth, this.contentWidth],
                content: this.photoImg,
                properties: {
                    boxShadow: "0 0 5px rgba(0,0,0,0.3)"
                }
            });
        }

        this.footer = new FooterView({
            likes: this.options.likes,
            comments: this.options.comments
        });

        this.cover = new Surface;
        this.cover.pipe(this.eventOutput);
    }

    StoryView.prototype = Object.create(View.prototype);
    StoryView.prototype.constructor = StoryView;

    StoryView.DEFAULT_OPTIONS = {
        scale: null,
        name: null,
        profilePics: null,
        text: null,
        photos: null,
        time: null,
        likes: null,
        comments: null,
        margin: 20
    };

    StoryView.prototype.getSize = function () {
    };

    StoryView.prototype.setProgress = function (t) {
        this.progress = t
    };

    StoryView.prototype.map = function (t, i, e) {
        return Utils.map(this.progress, 0, 1, t, i, e)
    };

    StoryView.prototype.render = function () {
        var t = this.map(120, 85),
            i = this.map(140, 105),
            e = this.map(-20, -68);
        this.map(48, 0), this.map(1 / 3 / this.options.scale, .5)

        this.profilePicsView.setProgress(this.progress);

        this.nameView.fade(this.progress);

        this.textView.fade(this.progress);

        this.spec = [];

        this.spec.push(this.card.render());

        this.spec.push({
            transform: Matrix.translate(this.options.margin, this.options.margin, 0),
            target: this.profilePicsView.render()
        });

        this.spec.push({
            transform: Matrix.translate(this.options.margin, t, 0),
            target: this.nameView.render()
        });

        if (this.textView) {
            this.spec.push({
                transform: Matrix.translate(this.options.margin, i, 0),
                size: [this.options.contentWidth, window.innerHeight - i - this.options.margin],
                target: {
                    target: this.textView.render()
                }
            });
        }

        if (this.photo) {
            this.spec.push({
                origin: [.5, 1],
                transform: Matrix.translate(0, e, .1),
                target: this.photo.render()
            })
        }

        this.spec.push({
            transform: Matrix.translate(this.options.margin, window.innerHeight - this.footer.getSize()[1], 0),
            opacity: Easing.inOutQuadNorm.call(this, this.progress),
            target: this.footer.render()
        });

        this.spec.push({
            transform: Matrix.translate(0, 0, 2),
            target: this.cover.render()
        });

        return this.spec;
    };

    Paper.StoryView = StoryView;
});