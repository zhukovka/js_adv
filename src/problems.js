var methods = {
    add: function add(a, b) {
        return a + b;
    },
    addg: function addg(a) {
        if (a == undefined) {
            return 0;
        }
        return function test2(b) {
            if (b != undefined) {
                a += b;
                return test2;
            }
            return a;
        };
    },

    applyg: function applyg(func) {
        var summ = 0;
        return function test(b) {
            if (b != undefined) {
                summ = func(summ, b);
                return test;
            }
            return summ;
        };
    },
    m: function m(a, b) {
        if (b == undefined) {
            b = a;
        }
        return {
            value: a,
            source: b + ""
        };
    }
};

module.exports = methods;