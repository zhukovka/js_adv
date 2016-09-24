var methods = {
    add: function add(a, b) {
        return a + b;
    },
    mul: function mul(a, b) {
        return a * b;
    },
    square: function (a) {
      return this.mul(a, a);
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
    },
    addm: function (m1, m2) {
        /*{value: num, source: sting}*/
        return this.m(m1.value, "(" + m1.source + "+" + m2.source + ")");
    },
    binarymf: function (func, op) {
        var self = this;
        return function (m1, m2) {
            if(typeof m1 == 'number'){
                m1 = self.m(m1);
            }
            if(typeof m2 == 'number'){
                m2 = self.m(m2);
            }
            return self.m(func(m1.value, m2.value), "(" + m1.source + op + m2.source + ")");
        }
    },
    unarymf: function (func, op) {
        var self = this;
        return function (a) {
            return self.m(func(a), "(" + op + " " +a + ")")
        }
    }
};

module.exports = methods;