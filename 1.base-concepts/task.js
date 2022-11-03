"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  const differential = b ** 2 - 4 * a * c;
  const root = -b / (2 * a);
  const rootFirst = (-b + Math.sqrt(differential) ) / (2 * a);
  const rootSecond = (-b - Math.sqrt(differential) ) / (2 * a);
  
  if(differential === 0) {
    arr.push(root);
  } else if(differential > 0) {
    arr.push(rootFirst, rootSecond);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  const textErrorPercent = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  const textErrorContribution = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  const textErrorAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;

  
  if(isNaN(percent) === true) {
    return textErrorPercent;
  } else if(isNaN(contribution) === true) {
    return textErrorContribution;
  } else if(isNaN(amount) === true) {
    return textErrorAmount;
  }

  let s = amount - contribution;

  let today = new Date();
  let timeDiff = Math.abs(date.getTime() - today.getTime());
  let n = Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 30.5));  
   
  let p = percent / 12 / 100;
  let payment = s * (p + (p / (((1 + p) ** n) - 1)));

  totalAmount = +(payment * n).toFixed(2);   

  return totalAmount;
}