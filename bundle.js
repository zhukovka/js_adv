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


},{"./Square":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU3F1YXJlLmpzIiwic3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBTcXVhcmUoc2lkZSwgeCwgeSkge1xyXG4gICAgdGhpcy5zaWRlID0gc2lkZSB8fCAyMDtcclxuICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgIHRoaXMueSA9IHkgfHwgMDtcclxufVxyXG5cclxuU3F1YXJlLnByb3RvdHlwZS5zZXRDb250ZXh0ID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbn07XHJcblxyXG5TcXVhcmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZighdGhpcy5jdHgpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBjb250ZXh0IG11c3QgYmUgc2V0XCIpO1xyXG4gICAgfVxyXG4gICAgLy9jb250ZXh0LmZpbGxSZWN0KHgseSx3aWR0aCxoZWlnaHQpO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2lkZSwgdGhpcy5zaWRlKTtcclxufTtcclxuXHJcblNxdWFyZS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4IHx8IHRoaXMueDtcclxuICAgIHRoaXMueSA9IHkgfHwgdGhpcy55O1xyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3F1YXJlOyIsInZhciBTcXVhcmUgPSByZXF1aXJlKCcuL1NxdWFyZScpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIGlmIChjYW52YXMgIT0gbnVsbCkge1xyXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgdyA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICB2YXIgaCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIHNpZGUgPSA1MDtcclxuICAgICAgICB2YXIgc3F1YXJlcyA9IFtdXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDUwOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgeCA9IE1hdGgucmFuZG9tKCkgKiAodyAtIHNpZGUpO1xyXG4gICAgICAgICAgICB2YXIgeSA9IE1hdGgucmFuZG9tKCkgKiAoaCAtIHNpZGUpO1xyXG4gICAgICAgICAgICB2YXIgc3F1YXJlID0gbmV3IFNxdWFyZShzaWRlLCB4LCB5KTtcclxuICAgICAgICAgICAgc3F1YXJlLnNldENvbnRleHQoY3R4KTtcclxuICAgICAgICAgICAgc3F1YXJlLmRyYXcoKTtcclxuICAgICAgICAgICAgc3F1YXJlcy5wdXNoKHNxdWFyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbnRldmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xyXG4gICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goZnVuY3Rpb24gKHNxdWFyZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRYID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMTtcclxuICAgICAgICAgICAgICAgIHZhciBkWSA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLm1vdmUoc3F1YXJlLngrZFgsIHNxdWFyZS55K2RZKTtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDMzKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4iXX0=
