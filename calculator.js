console.log(`this is a calculator!`);

const input = document.getElementById('input');
const tot = document.getElementById('tot');
const clear = document.getElementById('clear');
const equal = document.getElementById('equals');
const buttons = document.querySelectorAll('button');
console.log(buttons);

let total = 0;
let sumArr = [];
let sum = 0;
let typed = '';



buttons.forEach(button => {
  button.addEventListener('click', function() {
    // typed input for the display
      //typed = this.innerText;
      if (button.className === "output"){
        typed = this.innerText;
        input.textContent += typed;
      }

      sumArr.push(this.innerText);
      console.log(sumArr);
      sumArr.join("");

      if (button.getAttribute("target") === "calc") {
        console.log('you clicked an operator');
      } else if (button.id === "equals") {
        console.log('you clicked the equal sign');
        sumArr.pop(sumArr.length-1)
        sum = eval(sumArr.join(""))
        console.log('this is sum: ' + sum)
        tot.innerText = sum;
        //console.log('this is sum: ' + sum);
      } else if (button.id === "clear") {
        console.log('you clicked the clear button');
        input.textContent = '';
        //sumArr.pop(sumArr.length-1)
        sumArr = [];
        tot.textContent = 0;
        //sum = parseFloat(0.0);
      }

  });
});

/*
function calculation(num1, operator, num2) {
  if (operator === "add") {
    sum = eval(num1 + num2);
    console.log(sum)
  } else if (operator === "subtract") {
    sum = num1 - num2;
    console.log(sum)
  } else if (operator === "multiply") {
    sum = num1 * num2;
    console.log(sum)
  } else if (operator === "divide") {
    sum = num1 / num2;
    console.log(sum)
  }
}


const nums = document.querySelectorAll('button[target="num"]');
const calcs = document.querySelectorAll('button[target="calc"]');
//const decimal = document.getElementById('float');
console.log(nums);
console.log(calcs);

let total = 0.0;
let sum = 0.0;
let num = 0.0;
let numArr = [];
let numArr2 =[]
let operator = '';
let numLength = 0;
let typed = '';
let initial = 0.0;
let op = 0;

if (tot.innerText === "0.0") {
  console.log('the total is 0.0 and you need to take in two numbers');
  if (button.getAttribute("target") === "num") {
    console.log('you clicked a number');
    let n = this.innerText;
    numArr.push(n);
    console.log('this is numArr: ' + numArr);
  } else if (button.getAttribute("target") === "calc") {
    getValue(numArr)
  }
  //save the second number
} else {
  console.log('the total is higer or lower than 0.0, so you only need to process another number');

  console.log('you clicked a number');
  let n2 = this.innerText;
  numArr.push(n2);
  console.log('this is second numArr: ' + numArr);
  if (button.getAttribute("target") === "calc") {
    getValue(numArr)
  }
}

// collect the specific operator in an array
if (button.id === 'add') {
  sum += num;
} else if (button.id === 'subtract') {
  sum -= num;
}
tot.textContent = sum;
console.log(sum)

// run the appropriate calculation
function calculation (initial, operator, num2) {
  console.log('you ran the calculation() function');
  sum = parseFloat(initial) + " " + operator + " " +  parseFloat(num2);
  console.log('this is sum: ' + sum);
}

// if calulation, save the action in an array and stop collecting
//function getOperator() {

  // collect the specific operator in an array
  //op = this.innerText;
  //parseInt(operator)
  //operatorArr.push(op);
//}

// if decimal, make sure the stored number is a float
function getDecimal() {
  console.log('you clicked the decimal');
  //let nDecimal = ".";
  numArr.push('.');
  //console.log('this is nDecimal: ' + nDecimal);
}

// get the first number to plug into the calculation function
function getValue(numArr) {
  // cut out the numbers that make up the inital number
  num = numArr.splice(0, numLength);
  console.log('this is the end of the splice: ' + numLength)
  console.log('you have called the calculation function')
  num = parseFloat(num.join(""));
  console.log('this is num: ' + num)
}



if (tot.innerText === "0.0") {
  console.log('the total is 0.0 and you need to take in two numbers');
  // if output class, print every character above the total

  // if number, store inital in an array until an action is clicked
  if (button.getAttribute("target") === "num") {
    console.log('you clicked a number');
    let n = this.innerText;
    numArr.push(n);
    console.log('this is numArr: ' + numArr);
  // if decimal, make sure the stored number is a float
  } else if (button.getAttribute("target") === "float") {
    //console.log('you clicked the decimal');
    //let nDecimal = this.innerText;
    //numArr.push(nDecimal);
    //console.log('this is nDecimal: ' + nDecimal);
    getDecimal();
  // if calulation, save the action in an array and stop collecting
} else {
  console.log('the total is not 0, so you only need to process one more number');
  let n2 = this.innerText;
  numArr.push(n2);
  console.log(numArr);
}

if (button.getAttribute("target") === "calc") {
  console.log('you clicked an operator');
  // collect the specific operator in an array
  operator = this.innerText;
  parseInt(operator)
  //operatorArr.push(op);
  console.log('this is the operator: ' + operator);
  // cut out the numbers that make up the inital number
  numLength = numArr.length;
  inital = numArr.splice(0, numLength);
  console.log('this is the end of the splice: ' + numLength)
  initial = parseFloat(inital.join(""));
  console.log(initial);

  tot.innerText = initial;
  //console.log(initial);

  if (this.id === "add") {
    console.log(operator[0]);
    //console.log(sum);
  } /*else if (this.id === "subtract") {
    console.log(parseFloat(operator[1]));
    //console.log(sum)
  } else if (this.id === "multiply") {
    console.log(parseFloat(operator[2]));
    //console.log(sum)
  } else if (this.id === "divide") {
    console.log(parseFloat(operator[3]));
    //console.log(sum)
  }
  //getValue();

  //sum = operator + '= ' +  parseFloat(initial);
  //parseFloat(sum);
  //console.log('this is sum: ' + sum);

} else if (button.id === "equals") {
  console.log('you clicked the equal');
  getValue();
}




function getValue(numArr) {
  console.log('you clicked an operator');
  numLength = numArr.length;
  console.log('this is the end of the splice: ' + numLength)
  num = numArr.splice(0, numLength);
  num = parseFloat(num.join(""));
  console.log(num)
  tot.textContent = num;
}



if (this.id === "add") {
  sum = parseFloat(inital.join(""));
  console.log(sum);
}

if (this.id === "add") {
  sum = parseFloat(num.join(""));
  console.log(sum);
} else if (this.id === "subtract") {
  sum -= parseFloat(num.join(""))
  console.log(sum)
} else if (this.id === "multiply") {
  sum = parseFloat(num.join("")) * parseFloat(num.join(""))
  console.log(sum)
} else if (this.id === "divide") {
  sum /= parseFloat(num.join(""))
  console.log(sum)
}


      if (this.id === "add") {
        sum = parseFloat(numArr) operatorArr parseFloat(num2);
      } else if (this.id === "multiply") {
        sum = parseFloat(numArr) * parseFloat(num2);
      } else if (this.id === "divide") {
        sum = parseFloat(numArr) / parseFloat(num2);
      } else if (this.id === "subtract") {
        sum = parseFloat(numArr) - parseFloat(num2);
      }

nums.forEach(num => {
  num.addEventListener('click', function() {
    n = this.innerText;
    console.log('this is n: ' + n);
    numArr.push(n);
    console.log('this is numArr: ' + numArr);
    //num += parseInt(num);
    //console.log('this is num, in loop: ' + numArr);

    //let firstNum = numArr.join;
    //let op = this.innerText;
    //opArr.push(op);
    //console.log('this is operator: ' + opArr);
    //parseFloat(num)
    //console.log('this is parsed number num: ' + num);
  })

})
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // 1. collect numbers until one of the actions (+-/*) are pressed
    let typed = this.innerText;
    input.textContent += typed;
  })
})

equal.addEventListener('click', function() {
  //sum = '='+parseFloat(sum);
  tot.textContent = parseFloat(sum);
})

clear.addEventListener('click', function() {
  input.textContent = '';
  tot.textContent = parseFloat(0.0);
  sum = parseFloat(0.0);
})
*/
