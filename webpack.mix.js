let mix = require("laravel-mix");
let HtmlWebpackPlugin = require("html-webpack-plugin");
require('laravel-mix-purgecss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("src/js/app.js", "dist/js");
mix.css("src/scss/app.scss", "dist/css");
mix.purgeCss({
    enabled: mix.inProduction(),    
    folders: ['dist'],
});
mix.combine(
    [
        "src/vendor/aos/aos.js",
        "src/vendor/sweetalert2/sweetalert2.min.js",
    ],
    "dist/js/vendor.js" 
);

mix.combine(
    [
        "src/vendor/aos/aos.css",
        "src/vendor/font-awesome/css/font-awesome.min.css",
        "src/vendor/unicons/css/unicons.css",
        "src/vendor/sweetalert2/sweetalert2.min.css",
    ],
    "dist/css/vendor.css"
).options({
    processCssUrls: false
});

mix.sass("src/sass/app.scss", "dist/css");

mix.copyDirectory("src/vendor/font-awesome/fonts", "dist/fonts");
mix.copyDirectory("src/vendor/unicons/font", "dist/fonts");

// mix.sourceMaps();
mix.setPublicPath("dist");
mix.copyDirectory("src/images", "dist/images");

mix.disableNotifications();

mix.webpackConfig({
    output: {
        // path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/index.ejs",
            filename: "index.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-2.ejs",
            filename: "demo-2.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-3.ejs",
            filename: "demo-3.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-4.ejs",
            filename: "demo-4.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-5.ejs",
            filename: "demo-5.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-6.ejs",
            filename: "demo-6.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-7.ejs",
            filename: "demo-7.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-8.ejs",
            filename: "demo-8.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-9.ejs",
            filename: "demo-9.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-9_1.ejs",
            filename: "demo-9_1.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-10.ejs",
            filename: "demo-10.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-11.ejs",
            filename: "demo-11.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-12.ejs",
            filename: "demo-12.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-13.ejs",
            filename: "demo-13.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/demo-14.ejs",
            filename: "demo-14.html",
            inject: false
        })
        
    ],
    devServer: {
        //hot: true, inline: true, contentBase: __dirname
        disableHostCheck: false,
        watchContentBase: true,
        host: "0.0.0.0",
        open: true
        //port: 8082,
    }
});
    