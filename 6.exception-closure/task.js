function parseCount(arg) {
    if(isNaN(Number.parseInt(arg)) === true) {
        throw new Error('Невалидное значение');
    } else {
        return Number.parseInt(arg);
    }     
}

function validateCount(arg2) {
    try {
        return parseCount(arg2);
    } catch(error) {
        return error;
    } 
}

class Triangle {
    constructor(a, b, c) {
        this.a = a,
        this.b = b,
        this.c = c;

        if((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b) {
            throw new Error ('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter(a, b, c) {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    getArea(a, b, c) {
        let semiPerimeter = (this.a + this.b + this.c) / 2;
        let area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}