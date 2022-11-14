class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this._state = state,
        this.type = type
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if(newState < 0) {
            this._state = 0;
        } else if (newState >= 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }        
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super();
        this.type = 'magazine'
    }
}
    
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state = 100);
        this.type = 'book',
        this.author = author
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state = 100);
        this.type = 'detective'
    }
}

class Library {
    constructor(name, books) {
        this.name = String(name),
        this.books = []
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);                
        }   
    }    

    findBookBy(type, value) {
        let findBook = this.books.find(book => book[type] === value);

        if(findBook) {
            return findBook;
        } else {
            return null;
        }
    }

    // findBookBy = (type, value) => this.books.find((book) => book[type] === value) || null;


    giveBookByName(bookName) {
        let deleteBookIndex = this.books.findIndex(book => book.name === bookName);
 
        if(deleteBookIndex === -1) {
            return null;
        } else {
            return this.books.splice([deleteBookIndex], 1)[0];
        }
    }   
}

class Student {
    constructor(name) {
        this.name = name,
        this.marks = {}
    }

    addMark(mark, subjectName) {
        if(mark < 1 || mark > 5) {
            console.log ('Ошибка, оценка должна быть числом от 1 до 5');
        } 

        if(this.marks[subjectName] === undefined) {
            this.marks[subjectName] = [];
        }        
        
        this.marks[subjectName].push(mark);               
    }

    getAverageBySubject(subjectName) {        
        if(this.marks[subjectName] === "undefined") {
            return 'Несуществующий предмет';
        } else { 
            // let sum = 0;
            // let average = 0;


            // for(let i = 0; i < this.marks[subjectName].length; i++) {
            //     sum += this.marks[subjectName][i];
            // }      

            // average = sum / this.marks[subjectName].length;
        
            // return `Средний балл по предмету ${subjectName} ${average}`;

            let average = 0;
            average = this.marks[subjectName].reduce((acc, mark) => acc + mark, 0) / this.marks[subjectName].length;

            return `Средний балл по предмету ${subjectName} ${average}`;
        }        
    }    

    getAverage() {
        let subjects = Object.keys(this.marks);
        let sum = 0;
        for (let i = 0; i < subjects.length; i++) {
            sum += this.getAverageBySubject(subjects[i]);
        }

        return `Средний балл по всем предметам ${sum / subjects.length}`;
    }
  }