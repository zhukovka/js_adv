var methods = require('./problems');
var geometry = {
    hyp: function hyp(a, b) {
        return Math.sqrt(methods.add(methods.square(a), methods.square(b)));
    },
    exp: function (arr) {
        // var func = arr[0];
        // var args = arr.slice(1);
        // if (typeof arr[1] == "object") {
        //     // args = args.map(function (el) {
        //     //     return geometry.exp(el);
        //     // });
        //     var args1 = [];
        //     for (var i =0; i < args.length; i++){
        //         var el = args[i];
        //         args1.push(geometry.exp(el));
        //     }
        //     args = args1;
        // }
        // return func.apply(null, args);
        if (Array.isArray(arr)) {
            var func = arr[0];
            return func(geometry.exp(arr[1]), geometry.exp(arr[2]));
        }
        return arr;
    }

};

module.exports = geometry;