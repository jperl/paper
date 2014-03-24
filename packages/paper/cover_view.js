Famous.loaded(function (require) {
    var Surface = require('famous/Surface'),
        Modifier = require('famous/Modifier'),
        Matrix = require('famous/Matrix'),
        View = require('famous/View');

    function CoverView() {
        View.apply(this, arguments);

        this.profileImg = new Image;
        this.profileImg.src = this.options.img;
        this.profileImg.width = 320;
        this.profileImg.style.webkitBoxReflect = 'below';

        var coverBackground = new Surface({
            content: '<img width="320" src="covers/bg.png" />'
        });

        var coverBackgroundTransform = new Modifier({
            transform: Matrix.translate(0, 0, .001)
        });
        this._add(coverBackgroundTransform).link(coverBackground);

        var profileImageSurface = new Surface({
            size: [this.options.size, this.options.size],
            content: this.profileImg
        });
        this._add(profileImageSurface);
    }

    CoverView.prototype = Object.create(View.prototype);
    CoverView.prototype.constructor = CoverView;
    CoverView.DEFAULT_OPTIONS = {
        text: null,
        name: null,
        img: null
    };

    Paper.CoverView = CoverView;
});