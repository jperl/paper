Famous.loaded(function (require) {
    var Engine = require('famous/Engine'),
        Modifier = require('famous/Modifier'),
        Matrix = require('famous/Matrix'),
        View = require('famous/View'),
        SpringTransition = require('famous-physics/utils/SpringTransition'),
        Transitionable = require('famous/Transitionable'),
        LightBox = require('famous-views/LightBox'),
        Time = require('famous-utils/Time');

    var CoverData = [
        {
            text: 'Objects in the mirror are unluckier than they appear.',
            img: 'img/covers/sochi.jpg',
            name: 'Steve Kuzminski'
        },
        {
            text: 'Kylie Wilson changed her profile picture',
            img: 'img/covers/sochi.jpg',
            name: 'Kylie Wilson'
        },
        {
            text: 'Sick gifs from Sochi',
            img: 'img/covers/sochi.jpg',
            name: 'Chris Zimmerman'
        }
    ];

    Transitionable.registerMethod('spring', SpringTransition);

    //AppView
    function AppView() {
        View.apply(this, arguments);
        this.storiesView = new Paper.StoriesView;

        this.lightbox = new LightBox({
            inTransform: Matrix.identity,
            inOpacity: 0,
            inOrigin: [.5, .5],
            outTransform: Matrix.identity,
            outOpacity: 0,
            outOrigin: [.5, .5],
            showTransform: Matrix.identity,
            showOpacity: 1,
            showOrigin: [.5, .5],
            inTransition: {
                duration: 1e3
            },
            outTransition: {
                duration: 1e3
            },
            overlap: !0
        });

        this.covers = [];

        for (var t = 0; t < CoverData.length; t++) {
            var cover = new Paper.CoverView(CoverData[t]);
            this.covers.push(cover);
        }

        this.lightbox.show(this.covers[0]);
        var coverIndex = 0;
        Time.setInterval(function () {
            coverIndex++;

            if (coverIndex === this.covers.length)
                coverIndex = 0;

            this.lightbox.show(this.covers[coverIndex]);
        }.bind(this), 4e3);

        var e = new Modifier({
            transform: Matrix.translate(0, 0, -.1)
        });

        this._add(e).link(this.lightbox);
        this._add(this.storiesView);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;
    AppView.DEFAULT_OPTIONS = {};

    var Context = Engine.createContext();
    var appView = new AppView();

    Context.link(appView);
    Context.setPerspective(2000);
});