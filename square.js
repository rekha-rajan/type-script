var Square = /** @class */ (function () {
    function Square(width, color) {
        this.width = width;
        this.color = color;
    }
    Square.prototype.getArea = function () {
        var area = Math.pow(this.width, 2);
        console.log("".concat(this.color, " square area is ").concat(area));
    };
    return Square;
}());
var area = new Square(0, "red");
area.getArea();
