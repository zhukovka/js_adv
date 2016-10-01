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

