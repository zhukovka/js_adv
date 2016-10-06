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
        var squares = [];
        for(var a = 0; a < 50; i++){
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var square = new Square(side, x, y);
            square.setContext(ctx);
            square.draw();
            squares.push(square);
        }
        for(var b = 0; b < 50; i++){
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var circle = new Circle(side, x, y);
            circle.setContext(ctx);
            circle.draw();
            circle.push(circle);
        }
        for(var c = 0; c < 50; i++){
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var triangle = new Triangle(side, x, y);
            triangle.setContext(ctx);
            triangle.draw();
            triangle.push(triangle);
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

