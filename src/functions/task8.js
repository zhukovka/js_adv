function duckCount() {
    var result = [];
    return result = result.slice.call(arguments).filter(function (obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack');
    }).length;
}

    module.exports = duckCount;