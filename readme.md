# Sketchdance

This is working towards a flexible toolkit using next-generation web design tools: Stylus, Coffeescript, Mustache, Markdown, Backbone, and Node.

The goal is to have a suite of tools that help me get projects done faster, to use with Waterbear, but also my other projects-on-hold.

So far I have the basics working, but I still need:

* Reloading when files change (why else use a server?)
* Automatically finding partials and other files
* Processing of markdown (new mustache tag?)
* Client-side library suite
* Database (couchdb)
* Package it all up on github
* Page linking to all documentation

## Library Documentation

* [Markdown Basics](http://daringfireball.net/projects/markdown/basics)
* [Markdown Syntax](http://daringfireball.net/projects/markdown/syntax)
* [MultiMarkdown](http://fletcherpenney.net/multimarkdown/features/)
* [npm registry](http://search.npmjs.org/)
* [Raphael](http://raphaeljs.com/reference.html)
* [Underscore](http://documentcloud.github.com/underscore/)
* [Underscore String](https://github.com/edtsech/underscore.string)
* [CoffeeScript](http://jashkenas.github.com/coffee-script/)
* [Stache middleware](https://github.com/fat/stache)
* [Mustachio (better?) middleware](https://github.com/dandean/mustachio)
* [Express](http://expressjs.com/guide.html)
* [Connect middleware](https://github.com/senchalabs/connect)
* [Express Resource routing](https://github.com/visionmedia/express-resource)
* [Stylus CSS](http://learnboost.github.com/stylus/)
* [Backbone](http://documentcloud.github.com/backbone/)
* [Augment](http://olivernn.github.com/augment.js/)
* [Chrono](https://github.com/avk/jQuery-Chrono/)
* [Sprite](https://github.com/batiste/sprite.js/)
* [YepNope](http://yepnopejs.com/)
* [Modernizr](http://www.modernizr.com/)
* [LawnChair](http://westcoastlogic.com/lawnchair/)
* [JSONSelect](http://jsonselect.org/)
* [HTML Forms Polyfill  - H5F](https://github.com/ryanseddon/H5F)
*  

## Command-line processing

coffee --compile --watch --output public/js scripts
stylus --compress --watch --out public/css styles
? mustache 
? markdown (mmd, but need a watch script)

