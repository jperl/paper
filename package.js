Package.describe({
  name: 'jonperl:paper',
  summary: 'Card interface for the web, like facebook paper',
  version: '0.0.1',
  git: 'https://github.com/jperl/paper'
});

Package.onUse(function (api) {
  api.use(['jquery', 'stevezhu:velocity.js'], 'web');
  api.addFiles(['hammer.js/hammer.js', 'cards.js'], 'web');
  api.export('Cards', 'web');
});