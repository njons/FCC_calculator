const input = document.getElementById('input');
const tot = document.getElementById('tot');
const clear = document.getElementById('clear');
const equal = document.getElementById('equals');
const buttons = document.querySelectorAll('button');

let total = 0;
let sumArr = [];
let sum = 0;

buttons.forEach(button => {
  button.addEventListener('click', function() {
      sumArr.push(this.innerText);
      sumArr.join("");

    if (button.className === "output"){
       let typed = this.innerText;
      input.textContent += typed;
    }

      if (button.getAttribute("target") === "calc") {
        if (sumArr[sumArr.length-2] === "+"||  sumArr[sumArr.length-2] === "-"
         || sumArr[sumArr.length-2] === "*" || sumArr[sumArr.length-2] === "/") {
          input.textContent = 'error: you clicked an operator twice';
        }
      } else if (button.id  === "decimal") {
        if (sumArr[sumArr.length-2] === ".") {
          input.textContent = 'error: you clicked the decimal twice';
        }
      } else if (button.id === "equals") {
        sumArr.pop(sumArr.length-1)
        sum = eval(sumArr.join(""))
        tot.innerText = sum;
      } else if (button.id === "clear") {
        input.textContent = '';
        sumArr = [];
        tot.textContent = 0;
      }

  });
});
