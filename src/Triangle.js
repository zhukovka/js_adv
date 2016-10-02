var Shape = require('./Shape');

function Triangle(side, x, y) {
    Shape.apply(this, arguments);
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.draw = function () {
    this.ctx.beginPath();
    var x2 = this.x + this.side;
    var y2 = this.y + this.side;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(x2, y2);
    this.ctx.lineTo(x2 + this.side, y2 - this.side);
    this.ctx.fillStyle = this.generateColor();
    this.ctx.fill();
    this.ctx.fillStyle = "#000";
};

module.exports = Triangle;