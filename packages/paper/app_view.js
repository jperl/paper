Famous.loaded(function (require) {
    function AppView() {
        r.apply(this, arguments), this.storiesView = new c, this.lightbox = new u({
            inTransform: n.identity,
            inOpacity: 0,
            inOrigin: [.5, .5],
            outTransform: n.identity,
            outOpacity: 0,
            outOrigin: [.5, .5],
            showTransform: n.identity,
            showOpacity: 1,
            showOrigin: [.5, .5],
            inTransition: {
                duration: 1e3
            },
            outTransition: {
                duration: 1e3
            },
            overlap: !0
        }), this.covers = [];
        for (var t = 0; t < CoverData.length; t++) {
            var i = new l(CoverData[t]);
            this.covers.push(i)
        }
        var t = 0;
        this.lightbox.show(this.covers[0]), p.setInterval(function () {
            t++, t === this.covers.length && (t = 0), this.lightbox.show(this.covers[t])
        }.bind(this), 4e3);
        var e = new o({
            transform: n.translate(0, 0, -.1)
        });
        this._add(e).link(this.lightbox), this._add(this.storiesView)
    }

    var CoverData = [
        {
            text: "Objects in the mirror are unluckier than they appear.",
            img: "./img/covers/mirror.jpg",
            name: "Steve Kuzminski"
        },
        {
            text: "Kylie Wilson changed her profile picture",
            img: "./img/covers/kylie.jpg",
            name: "Kylie Wilson"
        },
        {
            text: "Sick gifs from Sochi",
            img: "./img/covers/sochi.jpg",
            name: "Chris Zimmerman"
        }
    ];

    var o = (require("famous/Engine"), require("famous/Modifier")),
        n = (require("famous/Surface"), require("famous/Matrix")),
        r = require("famous/View"),
        a = (require("famous-animation/Easing"), require("famous-sync/GenericSync"), require("famous/Transitionable")),
        h = require("famous-physics/utils/SpringTransition"),
        u = require("famous-views/LightBox"),
        p = require("famous-utils/Time"),
        c = Paper.StoriesView,
        l = Paper.CoverView;

    a.registerMethod("spring", h), AppView.prototype = Object.create(r.prototype), AppView.prototype.constructor = AppView, AppView.DEFAULT_OPTIONS = {}


    var Engine = require('famous/Engine');

    var Context = Engine.createContext();

    var appView = new AppView();

    Context.link(appView);
    Context.setPerspective(2000);
});