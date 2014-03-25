Package.describe({
    summary: 'A wrapper for the famous library, exposing the various modules.'
});

Package.on_use(function (api) {
    api.add_files(['famous.css', 'famous.lib.js', 'famous_wrapper.js'], 'client');
});