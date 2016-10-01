var obj = {
    get val(){
        return this.square(this.val1);
    },
    square: function (x) {
        return x*x
    },
    val1: 1,
    get a(){
        return this.val1;
    },
    set a(val){
        this.val1 = val;
    }
};

console.log(obj.val);
console.log(obj.val1);

module.exports = obj;