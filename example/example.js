if (Meteor.isClient) {
  Template.cards.helpers({
    cards: function () {
      return [
        { name: 'Chicago', src: 'chicago.jpg'},
        { name: 'Washington D.C.', src: 'dc.jpg'},
        { name: 'New York City', src: 'nyc.jpg'},
        { name: 'Philadelphia', src: 'philly.jpg'}
      ];
    },
    rendered: function () {
      // Setup the cards widget.
      self.cards = new Cards({
        $cards: self.$('.cards'),
        $scrollview: self.$('.horizontal-scroll-view')
      });
    }
  });
}