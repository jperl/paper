Package.describe({
    summary: 'A wrapper for the famous library, exposing the various modules.'
});

Package.on_use(function (api) {
    api.add_files(['famous.lib.js', 'famous_wrapper.js', 'famous.css'], 'client');
});