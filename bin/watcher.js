var fs = require('fs'),
    path = require('path');


function watchdir(dir, ext, callback){
    fs.readdir(dir, function(err, files){
        if (err){
            console.log('Error reading directory %s', dir);
            return;
        }
        files.forEach(function(filename, idx){
            if (path.extname(filename) !== ext) return;
            var filepath = dir + '/' + filename;
            fs.watchFile(filepath, function(curr, prev){
                if (curr.mtime > prev.mtime){
                    callback(filepath);
                }
            });
        });
    });
}

function watchCoffee(filepath){
    dest = __dirname + '/../public/js';
    console.log('detected changed coffeescript file %s', filepath);
}

function watchMarkdown(filepath){
    dest = __dirname + '../partials';
    console.log('detected changed markdown file %s', filepath);
    // After converting markdown file, reload partials and update mustache files
}

function watchStylus(filepath){
    dest = __dirname + '../public/css';
}

function watchMustache(filepath){
    // whenever partials or layout are updated, update all pages
}

function reloadPartials(){
}

function watchForNewFiles(dir, ext, callback){
    // 
}

watchdir(__dirname + '/../scripts', '.coffee', watchCoffee);

console.log('Press Control-C to exit.');
process.stdin.resume();

process.on('SIGINT', function () {
    process.exit();
});