Package.describe({
  name: 'jonperl:paper',
  summary: 'Card interface for the web, like facebook paper',
  version: '0.1.0',
  git: 'https://github.com/jperl/paper.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use(['jquery', 'stevezhu:velocity.js@0.1.0'], 'web');
  api.addFiles(['hammer.js/hammer.js', 'cards.js'], 'web');
  api.export('Cards', 'web');
});