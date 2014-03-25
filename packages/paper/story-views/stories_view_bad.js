Famous.loaded(function (require) {
    var Surface = require('famous/Surface'),
        Modifier = require('famous/Modifier'),
        Matrix = require('famous/Matrix'),
        View = require('famous/View'),

        EventHandler = require('famous/EventHandler'),
        GenericSync = require('famous-sync/GenericSync'),
        Transitionable = require('famous/Transitionable'),
        SpringTransition = require('famous-physics/utils/SpringTransition'),
        Scrollview = require('famous-views/Scrollview'),
        ViewSequence = require('famous/ViewSequence'),
        Utility = require('famous/Utility'),
        Utils = require('famous-utils/Utils'),

        StoryView = Paper.StoryView,
        PhotoStoryView = Paper.PhotoStoryView;

    function StoriesView() {
        View.apply(this, arguments);
        S.call(this);
        g.call(this);
        w.call(this);
    }

    Transitionable.registerMethod('spring', SpringTransition);

    StoriesView.prototype = Object.create(View.prototype);
    StoriesView.prototype.constructor = StoriesView;

    StoriesView.DEFAULT_OPTIONS = {
        velThreshold: .7,
        spring: {
            method: 'spring',
            period: 200,
            dampingRatio: 1
        },
        curve: {
            duration: 500,
            curve: 'easeOut'
        },
        cardScale: .445,
        gutter: 2
    };
    StoriesView.DEFAULT_OPTIONS.cardWidth = StoriesView.DEFAULT_OPTIONS.cardScale * window.innerWidth;
    StoriesView.DEFAULT_OPTIONS.cardHeight = StoriesView.DEFAULT_OPTIONS.cardScale * window.innerHeight;
    StoriesView.DEFAULT_OPTIONS.initY = window.innerHeight - StoriesView.DEFAULT_OPTIONS.cardHeight;
    StoriesView.DEFAULT_OPTIONS.posThreshold = (window.innerHeight - StoriesView.DEFAULT_OPTIONS.cardHeight) / 2;
    StoriesView.DEFAULT_OPTIONS.scrollOpts = {
        direction: Utility.Direction.X,
        defaultItemSize: [StoriesView.DEFAULT_OPTIONS.cardWidth, StoriesView.DEFAULT_OPTIONS.cardHeight],
        itemSpacing: 2 / StoriesView.DEFAULT_OPTIONS.cardScale,
        margin: 3 * window.innerWidth,
        pageSwitchSpeed: .1,
        pagePeriod: 300,
        pageDamp: 1,
        speedLimit: 10,
        drag: .001
    };

    var StoryData = [
        {
            name: "Nathalie Pickens",
            profilePics: ["./img/profile-pics/nat.jpg"],
            text: "Eat some kale today!",
            time: "8 HRS",
            likes: 3,
            comments: 2
        },
        {
            name: "Zita Molnar",
            profilePics: ["./img/profile-pics/zita.jpg"],
            text: "Sometimes walking in the San Francisco rain, without an umbrella, feels good.",
            time: "JUST NOW &#8226; FRIENDS",
            likes: 2,
            comments: 3
        },
        {
            name: "Josh Hoover",
            profilePics: ["./img/profile-pics/josh.jpg"],
            text: '"Revolution doesn\'t have to do with smashing something; it has to do with bringing something forth. If you spend all your time thinking about that which you are attacking, then you are negatively bound to it. You have to find the zeal in yourself and bring that out."<br><br>Joseph Campbell, Pathways to Bliss',
            time: "YESTERDAY",
            likes: 6,
            comments: 9
        },
        {
            name: "RJ Pickens",
            profilePics: ["./img/profile-pics/rj.jpg"],
            text: "Man, these are some good-looking speakers. #AISAudio #VOIDAudio",
            photos: ["./img/rj/photos/1.jpg"],
            time: "2 MINS &#8226; FRIENDS",
            likes: 10,
            comments: 2
        },
        {
            name: "Scuba Steve",
            profilePics: ["./img/profile-pics/scuba.jpg"],
            text: "Eric Prydz EPIC 2.0!!!! \\o/",
            photos: ["./img/scuba/photos/1.jpg"],
            time: "12 HRS",
            likes: 5,
            comments: 3
        },
        {
            name: "Shupac Takur added 4 new photos with Lee-ann Platt and 5 others",
            profilePics: ["./img/profile-pics/shu.jpg", "./img/profile-pics/leeann.jpg", "./img/profile-pics/sabina.jpg", "./img/profile-pics/corban.jpg", "./img/profile-pics/corban.jpg", "./img/profile-pics/corban.jpg"],
            text: "Fun times at Sunset Picnic! ",
            photos: ["./img/shu/photos/1.jpg", "./img/shu/photos/2.jpg", "./img/shu/photos/3.jpg", "./img/shu/photos/4.jpg"],
            time: "8 MINS &nbsp;SAN FRANCISCO, CA &#8226; FRIENDS",
            likes: 9,
            comments: 4
        },
        {
            name: "Jane Williams",
            profilePics: ["./img/profile-pics/jane.jpg"],
            text: "Hilarious! #goodguyroy",
            time: "4 HRS &#8226; PUBLIC",
            likes: 4,
            comments: 2,
            articleThumbSm: "./img/roy/roysm.jpg",
            articleThumbLg: "./img/roy/roylg.jpg",
            article: '<img src="./img/roy/header.png" width="320" /><div style="padding:0 20px;"><h1>I Could Watch Roy Hibbert Blocking This Little Kid\'s Shot All Day Long</h1><iframe width="280" height="158" src="//www.youtube.com/embed/BY69NUNsF1Q?rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe><p>Indiana Pacers big man Roy Hibbert visited Paramount School of Excellence in Indianapolis and relived his childhood when he wasn\'t yet an NBA star for a cute video. The best part is when he swats the crap out of a kid\'s weak layup, which has been GIFed below. (Second-best part is Hibbert using a child as a human shield in dodgeball.)</p><img width="280" src="./img/roy/block.jpg" /><p>The GIF\'s really missing the crushing thump of Hibbert\'s hand on the rejection, so watch the video for the full experience.</p></div>'
        }
    ];

    var g = function () {
        this.storiesHandler = new EventHandler;
        this.scrollview = new Scrollview(this.options.scrollOpts);
        this.stories = [];

        for (var t = 0; t < StoryData.length; t++) {
            var i, e = {
                profilePics: StoryData[t].profilePics,
                name: StoryData[t].name,
                text: StoryData[t].text,
                time: StoryData[t].time,
                likes: StoryData[t].likes,
                comments: StoryData[t].comments,
                scale: this.options.cardScale
            };

            if (StoryData[t].article) {
                e.content = StoryData[t].article;
                e.thumbSm = StoryData[t].articleThumbSm;
                e.thumbLg = StoryData[t].articleThumbLg;
                e.velThreshold = this.options.velThreshold;
                i = new Paper.ArticleStoryView(e);
            } else {
                e.photos = StoryData[t].photos;
                i = StoryData[t].photos;

                if (i && StoryData[t].photos.length > 1) {
                    i = new PhotoStoryView(e);
                } else {
                    i = new StoryView(e);
                }
            }
            i.pipe(this.storiesHandler);
            this.stories.push(i);

            i.on('touchstart', function (t) {
                this.targetStory = t
            }.bind(this, i));
        }
        this.storiesHandler.pipe(this.scrollview);
        this.storiesHandler.pipe(this.ySync);

        var storiesSequence = new ViewSequence(this.stories, 0, true);
        this.scrollview.sequenceFrom(storiesSequence);
        this.scrollview.on('paginate', function () {
            if (this.targetStory.sequence) {
                this.targetStory.sequence();
                this.targetStory.disableScroll();
            }
        }.bind(this))
    };

    var S = function () {
        this.yPos = new Transitionable(this.options.initY);
        this.ySync = new GenericSync(function () {
            return [0, this.yPos.get()]
        }.bind(this));
    };

    var w = function () {
        this.ySync.on('start', function () {
            var yPos = this.yPos.get();

            this.direction = undefined;

            if (yPos === 0 && this.targetStory.scrollable) {
                this.targetStory.enableScroll();
            }

            if (yPos === 0 && this.targetStory.flipable) {
                this.targetStory.enableFlip();
            }

            this.enableY = false;
        }.bind(this));

        this.ySync.on('update', function (t) {
            var yPos = this.yPos.get();
            if (!this.direction) {
                if (Math.abs(t.v[1]) > Math.abs(t.v[0])) {
                    this.direction = 'y'
                } else {
                    this.storiesHandler.unpipe(this.ySync);
                    this.direction = 'x';
                }
            }

            if (this.direction === 'y') {
                if (yPos !== 0) {
                    this.enableY = true;
                    this.swipeY = true;
                } else {
                    if (this.targetStory.scrollable || this.targetStory.flipable) {
                        this.enableY = true;
                    }

                    if (this.targetStory.scrollable && this.targetStory.top && t.v[1] > 0) {
                        this.targetStory.disableScroll();
                        this.enableY = true;
                    }
                    if (this.targetStory.flipable && this.targetStory.closed && t.v[1] > 0) {
                        this.targetStory.disableFlip();
                        this.enableY = true;
                    }

                    if (this.enableY) {
                        this.yPos.set(Math.min(this.options.initY + 75, Math.max(-75, t.p[1])));
                    }
                }
            } else {
                if (this.targetStory.scrollable && Math.abs(this.targetStory.scrollview.getVelocity()) > .05) {
                    this.storiesHandler.unpipe(this.scrollview);
                }
            }
        }.bind(this));

        this.ySync.on('end', function (t) {
            this.storiesHandler.pipe(this.scrollview);
            this.storiesHandler.pipe(this.ySync);
            var i = t.v[1].toFixed(2);

            if (this.enableY) {
                if (this.yPos.get() < this.options.posThreshold) {
                    if (i > this.options.velThreshold) {
                        this.slideDown(i);
                    } else {
                        this.slideUp(Math.abs(i));
                    }
                } else {
                    if (i < -this.options.velThreshold) {
                        this.slideUp(Math.abs(i));
                    } else {
                        this.slideDown(i);
                    }
                }
            }
        }.bind(this));
    };

    StoriesView.prototype.slideUp = function (velocity) {
        console.log('slide up');
        var spring = this.options.spring;
        spring.velocity = velocity;
        this.options.scrollOpts.paginated = true;
        this.scrollview.setOptions(this.options.scrollOpts);
        this.yPos.set(0, spring);
    };

    StoriesView.prototype.slideDown = function (velocity) {
        console.log('slide down');
        var spring = this.options.spring;
        spring.velocity = velocity;
        this.options.scrollOpts.paginated = false;
        this.scrollview.setOptions(this.options.scrollOpts);
        this.yPos.set(this.options.initY, spring);
    };

    StoriesView.prototype.render = function () {
        var t = this.yPos.get(),
            i = Utils.map(t, 0, this.options.initY, 1, this.options.cardScale);

        this.progress = Utils.map(t, this.options.initY, 0, 0, 1, true);

        this.scrollview.sync.setOptions({
            direction: GenericSync.DIRECTION_X,
            scale: 1 / i
        });

        for (var e = 0; e < this.stories.length; e++) {
            this.stories[e].setProgress(this.progress);
        }

        this.spec = [];
        this.spec.push({
            origin: [.5, 1],
            transform: Matrix.scale(i, i, 1),
            target: {
                size: [window.innerWidth, window.innerHeight],
                target: this.scrollview.render()
            }
        });

        return this.spec;
    };

    Paper.StoriesView = StoriesView;
});