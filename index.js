var express = require('express'),
    connect = require('connect'),
    mustachio = require('mustachio'),
    app = express.createServer();

// Set up mustache view engine for templates
app.set('view engine', 'mustache');
app.register('.mustache', mustachio);
app.use(express.static(__dirname + '/public'));

// Set up stylus middleware for CSS
var stylus = require('stylus');
function compile(str, path) {
  return stylus(str)
    // .import(__dirname + '/css/mixins/blueprint')
    // .import(__dirname + '/css/mixins/css3')
    .set('filename', path)
    .set('warn', true)
    .set('compress', true);
}
app.use(stylus.middleware({
        src: __dirname + '/styles'
      , dest: __dirname + '/public'
      , compile: compile
    })
);


// Set up coffeescript middleware for JS
var coffeescript = require('coffee-script');
app.use(express.compiler({
    src: __dirname + '/scripts',
    dest: __dirname + '/public',
    enable: ['coffeescript']})
);



app.get('/', function (req, res) {
  res.render("index", {
    locals: {
      title: 'First page'
    },
    partials: {
      heading: '<title>{{title}}</title>'
    }
  });
});

app.listen(4321);
console.log('Node is listening on port 4321');
// util = require('util');
// util.log(util.inspect(express));
