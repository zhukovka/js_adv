var Square = require('./Square');
var Circle = require('./Circle');
var Triangle = require('./Triangle');
function errorHandler(err) {
    return Promise.reject(err);
}
var geometry = (function (Square, Circle, Triangle) {
    var Shape = require('./Shape');
    if (!(Shape.prototype.isPrototypeOf(Square.prototype)
        && Shape.prototype.isPrototypeOf(Circle.prototype)
        && Shape.prototype.isPrototypeOf(Triangle.prototype))) {
        throw new Error('Geometry depends on Square, Circle, Triangle');
    }
    var ctx, w, h, side, shapes, interval, config;

    //export
    function generateShapes(config) {
        for (var i = 0; i < config.square; i++) {
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var square = new Square(side, x, y);
            square.setContext(ctx);
            shapes.push(square);
        }
        for (var i = 0; i < config.circle; i++) {
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var circle = new Circle(side, x, y);
            circle.setContext(ctx);
            shapes.push(circle);
        }
        for (var i = 0; i < config.triangle; i++) {
            var x = Math.random() * (w - side);
            var y = Math.random() * (h - side);
            var triangle = new Triangle(side, x, y);
            triangle.setContext(ctx);
            shapes.push(triangle);
        }

        return config;
    }

    return {
        init: function (canvas) {
            ctx = canvas.getContext('2d');
            w = canvas.width;
            h = canvas.height;
            side = 50;
            shapes = [];
            var xhr = new XMLHttpRequest();
            var promise = new Promise(function (resolve, reject) {
                xhr.addEventListener('load', function () {
                    if (xhr.status == 200) {
                        config = JSON.parse(xhr.response);
                        resolve(config);
                    } else {
                        reject(new Error('Server Error' + xhr.status));
                    }
                });
                xhr.open('GET', '/config');
                xhr.send();
            });

            return promise.then(generateShapes, errorHandler);
        },
        start: function () {
            console.log("start");
            interval = setInterval(function () {
                ctx.clearRect(0, 0, w, h);
                shapes.forEach(function (shape, i) {
                    var dX = Math.random() > 0.5 ? 1 : -1;
                    var dY = Math.random() > 0.5 ? 1 : -1;

                    shape.move(shape.x + dX, shape.y + dY);
                    shape.draw();
                });
            }, 100);

        },
        stop: function () {
            clearInterval(interval);
        }
    };
})(Square, Circle, Triangle);

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById('canvas');
    var startBtn = document.getElementById('start');
    var stopBtn = document.getElementById('stop');
    if (canvas != null) {
        geometry.init(canvas).then(function () {
            startBtn.addEventListener('click', function () {
                geometry.start();
            });
            stopBtn.addEventListener('click', function () {
                geometry.stop();
            });
        }, errorHandler);


    }
});

