Famous.loaded(function (t) {
        function FooterView() {
            a.apply(this, arguments), this.img = new Image, this.img.src = "./img/footer.png", this.img.width = this.options.width;
            var t = new o({
                    size: [this.options.width, 50],
                    content: this.img
                }),
                i = new o({
                    size: [140, 40],
                    content: '<div class="footer-likes">' + this.options.likes + " Likes &nbsp;" + this.options.comments + ' Comments</div><div class="footer-write">Write a comment</div>'
                }),
                e = new n({
                    transform: r.translate(140, 9, 0)
                });
            this._add(t), this._add(e).link(i), t.pipe(this.eventOutput), i.pipe(this.eventOutput)
        }
        var o = t("famous/Surface"),
            n = t("famous/Modifier"),
            r = t("famous/Matrix"),
            a = t("famous/View");
        FooterView.prototype = Object.create(a.prototype), FooterView.prototype.constructor = FooterView, FooterView.DEFAULT_OPTIONS = {
            width: 280,
            likes: null,
            comments: null,
            margin: 20
        }, FooterView.prototype.getSize = function() {
            return [280, 50]
        }

    Paper.FooterView = FooterView;
});