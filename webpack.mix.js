const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]);

if (mix.inProduction()) {
    mix.version();
}

mix.postCss('resources/coreUI/css/style.css', 'public/css/coreui.css').js([
    'resources/coreUI/js/coreui.bundle.min.js',
    'resources/coreUI/js/svgxuse.min.js'
],'public/js/coreui.js');
