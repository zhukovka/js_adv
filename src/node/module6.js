var fs = require('fs');
var path = require("path");

module.exports = function (file, ext, cb) {
    fs.readdir(file, function(err, list){
        if(err) {
            return cb(err);
        }
        cb(null, list.filter(function (arr){
            return path.extname(arr) == "." + ext;
        }));
    });
};