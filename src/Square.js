var Shape = require("./Shape");

function Square(side, x, y) {
    Shape.apply(this, arguments);
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function () {
    if (!this.ctx) {
        throw new Error("The context wasn't find");
    }
    this.ctx.fillStyle = this.genarateColor();
    this.ctx.fillRect(this.x, this.y, this.side, this.side);
    this.ctx.fillStyle = "#000";
};

module.exports = Square;