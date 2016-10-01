/*
 # Task:

 Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.

 Example:

 var notDuck = Object.create({quack: true})
 var duck = {quack: true}
 duckCount(duck, notDuck) // 1

 */
function duckCount() {
    return [].slice.call(arguments, 0).filter(function (obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack');
    }).length;
}

module.exports = duckCount;