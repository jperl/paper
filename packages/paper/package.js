Package.describe({
    summary: 'The paper controls for famous'
});

Package.on_use(function (api) {
    api.use('famous');

    //Not quite sure what this is: article-views/article_full_view.js

    api.add_files([
        'app.css', 'paper.js', 'cover_view.js',
        'article-views/article_bottom_view.js', 'article-views/article_top_view.js', 'article-views/article_view.js',
        'story-views/profile_pic_view.js', 'story-views/number_view.js', 'story-views/profile_pics_view.js',
        'story-views/name_view.js', 'story-views/text_view.js', 'story-views/footer_view.js',
        'story-views/article_story_view.js', 'story-views/photo_story_view.js',
        'story-views/story_view.js', 'story-views/stories_view.js', 'app_view.js'
    ], 'client');

    api.export(['Paper'], 'client');
});