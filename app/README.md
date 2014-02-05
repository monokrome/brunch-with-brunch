Application
===========

Put your application-specific files here, but leave your third party libraries in the vendor directory.  Within Javascript and CSS, you will reference all of your code using whatever directory structure you layout here.  However, in your HTML, you must refer to `/stylesheets/app.css` and `/javascripts/app.js` for javascript files.

You may customize this directory structure without changing any other settings as Brunch will concatenate all js/css files and place them into `/stylesheets/app.css` and `/javascripts/app.js` by default.

You can customize the concatenation settings in `config.coffee` and using a directory structure can make more complex builds simpler.  For example, say you want to brunch to produce two files for production use, `baz.js` and `bar.js`.  If `foo.js` is used ing both `bar.js` `var bar.foo = require('scripts/foo.js')` and `baz.js` `baz.foo = require('scripts/foo.js')`, you could place `foo.js` into  `/scripts/libs/foo.js` and match against all files in the libs directory `/scripts/libs/*` in `config.coffee`'s `joinTo` entries for `bar.js` and `baz.js`.