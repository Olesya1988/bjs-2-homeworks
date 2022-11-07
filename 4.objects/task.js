function Student(name, gender, gender) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.gender = gender;
}

let student3 = new Student("Mary", "female", 18);
let student4 = new Student("John", "male", 20);


Student.prototype.setSubject = function(subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function(mark) {
  //ваш код
  if(this.marks === undefined){ 
    // добавить первую оценку 
    this.marks = [mark]; 
    } else {
      // добавить вторую и последующие оценки в массив
      this.marks.push(mark);     
    }
}

Student.prototype.addMarks = function(...others) {
  //ваш код
  this.marks = [...others]; 
}

Student.prototype.getAverage = function() {
  //ваш код
  let sum = 0;
  let average = 0;  
  for(let i = 0; i < this.marks.length; i++) {    
    sum += this.marks[i];  }  
    average = sum / this.marks.length;  
    return average;
}

Student.prototype.exclude = function(reason) {
  //ваш код
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}