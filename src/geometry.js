var methods = require('./problems');
var geometry = {
    hyp: function hyp(a, b) {
        var hypotenuse;
        hypotenuse = methods.square(a) + methods.square(b);
        return hypotenuse = Math.sqrt(hypotenuse);
    },
    exp: function exp(meth) {
        var arr = meth;
        var func = arr[0];
        if (typeof arr[1] == "object") {
            exp(arr[1]);
        }
        return func.apply(this, [arr[1], arr[2]]);
    }

};
module.exports = geometry;