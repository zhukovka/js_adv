function Square(side, x, y) {
    this.side = side || 20;
    this.x = x || 0;
    this.y = y || 0;
}

Square.prototype.setContext = function (ctx) {
    this.ctx = ctx;
};

Square.prototype.draw = function () {
    if(!this.ctx){
        throw new Error("The context must be set");
    }
    //context.fillRect(x,y,width,height);
    this.ctx.fillRect(this.x, this.y, this.side, this.side);
};

Square.prototype.move = function (x, y) {
    this.x = x || this.x;
    this.y = y || this.y;
};


module.exports = Square;