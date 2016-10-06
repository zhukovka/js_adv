function Shape(side, x, y) {
    this.side = side || 20;
    this.x = x || 0;
    this.y = y || 0;
}

Shape.prototype.setContext = function (ctx) {
    this.ctx = ctx;
};
Shape.prototype.move = function (x, y) {
    this.x = x || this.x;
    this.y = y || this.y;
};
Shape.prototype.genarateColor = function() {
    var red = Math.round(Math.random()*255);
    var green = Math.round(Math.random()*255);
    var blue = Math.round(Math.random()*255);
    return "#" + (red).toString(16) + (green).toString(16) + (blue).toString(16);
} ;
module.exports = Shape;