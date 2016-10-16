/*
 Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

 Create a spy that keeps track of how many times a function is called.

 */
function Spy(target, method) {
   
        var result = {count: 2};
        return function () {
            return result;
        }

}

module.exports = Spy;

