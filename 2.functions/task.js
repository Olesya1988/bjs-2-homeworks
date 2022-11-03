// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;  
  for(let i = 0; i < arr.length; i++) { 
    sum += arr[i];
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
  }
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++) { 
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = -Infinity;
  let sumOfSum;

  for(let i = 0; i < arrOfArr.length; i++) {
    sumOfSum = worker(arrOfArr[i]);
    
    if(sumOfSum > max) {
      max = sumOfSum;
    }
  }   

  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  let diff = 0;

  for(let i = 0; i < arr.length; i++) { 
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
    diff = Math.abs(max - min);
  }

  return diff;
}
