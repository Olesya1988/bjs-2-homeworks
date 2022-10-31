"use strict"
function solveEquation(a, b, c) {
  let arr;

  let d = b ** 2 - 4 * a * c;
  
  if(d < 0) {
    arr = [];
  } else if(d === 0) {
    arr = [-b/(2*a)];
  } else if(d > 0) {
    arr = [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
}

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  if(Boolean(Number(percent)) === false && percent != 0) {
      alert('Параметр "Процентная ставка" содержит неправильное значение ' + percent);
    } 
  percent = Number(percent);

  if(Boolean(Number(contribution)) === false && contribution != 0) {
      alert('Параметр "Начальный взнос" содержит неправильное значение ' + contribution);
    } 
  contribution = Number(contribution);

  if(Boolean(Number(amount)) === false && amount != 0) {
      alert('Параметр "Общая стоимость" содержит неправильное значение ' + amount);
    } 
  amount = Number(amount);    

  let s = amount - contribution;

  let today = new Date();
  let timeDiff = Math.abs(date.getTime() - today.getTime());
  let n = Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 30));  
   
  let p = percent / 12 / 100;
  let payment = s * (p + (p / (((1 + p) ** n) - 1)));

  totalAmount = (payment * n).toFixed(2);   

  return totalAmount;
}
