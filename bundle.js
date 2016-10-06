(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
},{"./Shape":1}],3:[function(require,module,exports){
var Shape = require("./Shape");

function Circle(side, x, y) {
    Shape.apply(this, arguments);
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function () {
    if (!this.ctx) {
        throw new Error("The context wasn't find");
    }
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.side, 0, 2* Math.PI);
    this.ctx.fillStyle = this.genarateColor();
    this.ctx.fill();
    this.ctx.fillStyle = "#000";
};

module.exports = Circle;
},{"./Shape":1}],4:[function(require,module,exports){
var Square = require('./Square');
var Circle = require("./circle");
var Triangle = require("./triangle");

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('canvas');
    if (canvas != null) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;
        var side = 50;
        var shapes = [];
        for(var i = 0; i < 50; i++){
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var square = new Square(side, x, y);
            square.setContext(ctx);
            square.draw();
            shapes.push(square);
        }
        for(var i = 0; i < 50; i++){
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var circle = new Circle(side, x, y);
            circle.setContext(ctx);
            circle.draw();
            shapes.push(circle);
        }
        for(var c = 0; c < 50; c++){
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var triangle = new Triangle(side, x, y);
            triangle.setContext(ctx);
            triangle.draw();
            shapes.push(triangle);
        }
        var inteval = setInterval(function () {
            ctx.clearRect(0, 0, w, h);
            shapes.forEach(function (shape, i) {
                var dX = Math.random() > 0.5 ? 1 : -1;
                var dY = Math.random() > 0.5 ? 1 : -1;

                shape.move(shape.x+dX, shape.y+dY);
                shape.draw();
            });
        }, 100);
    }
});


},{"./Square":2,"./circle":3,"./triangle":5}],5:[function(require,module,exports){
var Shape = require("./Shape");

function Triangle(side, x, y) {
    Shape.apply(this, arguments);
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.draw = function () {
    if (!this.ctx) {
        throw new Error("The context wasn't find");
    }
    this.ctx.beginPath();
    var x2 = this.x + this.side;
    var y2 = this.y + this.side;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(x2, y2);
    this.ctx.lineTo(x2 + this.side, y2 - this.side);
    this.ctx.fillStyle = this.genarateColor();
    this.ctx.fill();
    this.ctx.fillStyle = "#000";
};

module.exports = Triangle;
},{"./Shape":1}]},{},[4]);
