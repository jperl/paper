Famous.loaded(function (require) {
    function ProfilePicView() {
        a.apply(this, arguments), this.profileImg = new Image, this.profileImg.src = this.options.url, this.profileImg.width = this.options.size;
        var t = new o({
            size: [this.options.size, this.options.size],
            content: this.profileImg,
            classes: ["profile-view"]
        });
        this.mod = new n, this._link(this.mod).link(t), t.pipe(this.eventOutput)
    }

    {
        var o = require("famous/Surface"),
            n = require("famous/Modifier"),
            r = require("famous/Matrix"),
            a = require("famous/View");
        require("famous-animation/Easing")
    }

    ProfilePicView.prototype = Object.create(a.prototype);

    ProfilePicView.prototype.constructor = ProfilePicView;

    ProfilePicView.DEFAULT_OPTIONS = {
        url: null,
        size: 120
    };

    ProfilePicView.prototype.setScale = function (t) {
        this.scale = t, this.mod.setTransform(r.scale(t, t, 1))
    };

    ProfilePicView.prototype.getSize = function () {
        return [this.options.size * this.scale, this.options.size * this.scale]
    };

    Paper.ProfilePicView = ProfilePicView;
});