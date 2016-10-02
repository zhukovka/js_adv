(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
var Square = require('./Square');

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('canvas');
    if (canvas != null) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;
        var side = 50;
        var squares = []
        for(var i = 0; i < 50; i++){
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var square = new Square(side, x, y);
            square.setContext(ctx);
            square.draw();
            squares.push(square);
        }
        var inteval = setInterval(function () {
            ctx.clearRect(0, 0, w, h);
            squares.forEach(function (square, i) {
                var dX = Math.random() > 0.5 ? 1 : -1;
                var dY = Math.random() > 0.5 ? 1 : -1;

                square.move(square.x+dX, square.y+dY);
                square.draw();
            });
        }, 33);
    }
});


},{"./Square":1}]},{},[2]);
