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
