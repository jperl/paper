Package.describe({
    summary: 'The paper controls for famous'
});

Package.on_use(function (api) {
    api.use('famous');

    api.add_files([
        'paper.js', 'cover_view.js', 'article_story_view.js', 'stories_view.js'
    ], 'client');

    api.export(['Paper'], 'client');
});