interface Squares {
    width :number;
    color? :string;
    getArea(): void;
}

class Square implements Squares {

    width :number;
    color? :string;

    constructor(width :number, color? :string) {
        this.width = width;
        this.color = color;
    }

    getArea() {
        let area = this.width** 2
        let message = `Square of the area is ${area}`;
        if (this.color) {
            message += ` and color is ${this.color}`;
        }
        console.log(message);
    }

}

const Area = new Square(6,"Red");
Area.getArea();

