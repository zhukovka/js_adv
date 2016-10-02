var Shape = require('./Shape');

function Circle(r, x, y) {
    Shape.apply(this, arguments);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function () {
    if (!this.ctx) {
        throw new Error("The context must be set");
    }
    this.ctx.beginPath();
    //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    this.ctx.arc(this.x, this.y, this.side, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.generateColor();
    this.ctx.fill();
    this.ctx.fillStyle = "#000";
};

module.exports = Circle;