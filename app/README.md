Application
===========

Put your application-specific files here, but leave your third party libraries in the vendor directory.  You do not need to separate types according to directory as Brunch will concatenate all js/css files automatically by default.

However, you can customize the concatenation settings in `config.coffee` and using a directory structure can make more complex builds simpler.  For example, you could have two end js files `baz.js` and `bar.js` which both use a common base module `foo.js` via `var bar.foo = require('foo.js')` and `baz.foo = require('foo.js')`.  Instead of a baz and bar having to list each file you can place `foo.js` into  `/scripts/libs/foo.js` and match against all files in the libs directory `/scripts/libs/*`.
