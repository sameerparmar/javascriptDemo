try {
    window._ = require('lodash');
    window.$ = window.jQuery = require('../../node_modules/jquery');
    window.Popper = require('@popperjs/core').default;
    require('../../node_modules/bootstrap');
    // require('../../node_modules/swiper/swiper-bundle');
} catch (e) {}
