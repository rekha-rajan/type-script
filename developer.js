var softwareDeveloper = /** @class */ (function () {
    function softwareDeveloper(name, position, stream) {
        this.softwareDev = new softwareDeveloper("John Doe", "Software Engineer", "Backend");
        this.name = name;
        this.position = position;
        this.stream = stream;
    }
    softwareDeveloper.prototype.develop = function () {
        console.log("".concat(this.name, " is developing in the ").concat(this.stream, " stream."));
    };
    return softwareDeveloper;
}());
