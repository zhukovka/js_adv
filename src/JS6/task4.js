/*
 Let's do exactly that. Starting with the original code example above,
 replace the anonymous function passed to setImmediate with an arrow function.

 */
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp))
    }
};
foot.kick();


