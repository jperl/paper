if (Meteor.isClient) {
  Template.cards.helpers({
    cards: function () {
      return [
        { name: 'Chicago', src: 'chicago.jpg'},
        { name: 'Washington D.C.', src: 'dc.jpg'},
        { name: 'New York City', src: 'nyc.jpg'},
        { name: 'Philadelphia', src: 'philly.jpg'},
        { name: 'Los Angeles', src: 'la.jpg'},
        { name: 'Houston', src: 'houston.jpg'},
        { name: 'Phoenix', src: 'phoenix.jpg'}
      ];
    },
    rendered: function () {
      // Setup the cards widget.
      self.cards = new Cards({
        debug: true,
        $cards: self.$('.cards'),
        $scrollview: self.$('.horizontal-scroll-view')
      });
    }
  });
}