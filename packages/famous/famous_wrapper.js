var onLoad = [];

//XXX figure out how to properly define components once Famo.us is released
//in the meantime use our hacked together loaded function
Famous.loaded = function (func) {
    onLoad.push(func);
};

Famous(function (require) {
    _.each(onLoad, function (func) {
        func(require);
    });
});