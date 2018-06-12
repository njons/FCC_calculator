
# [FreeCodeCamp calculator challenge](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator/)
This website was created as part of Front End Libraries certification one of the learning pathways at FreeCodeCamp. 

![screenshot form site](https://github.com/njons/FCC_calculator/blob/master/calculator.png)

## Brief 
The brief asked for a calculator similar to [this](https://codepen.io/freeCodeCamp/full/wgGVVX) example and the [project page](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator/) had a 15-point feature list in your oen personal style.

## Idea 
I based the design of the calculator on assets used in other projects([Businesscard microsite](https://www.nathaliejonsson.com), [Founders and Coders application site](https://njons.github.io/founders_and_coders/index), [Personal lab testsite](https://njons.github.io/laboratory/index.html)) and I wanted the challenge of building a full screen and fully responsive calculator.

## Execution
**Specs:** 
- The site was built using HTML, CSS and JavaScript

---

**CSS styles:** 
- The calculator itself is built in CSS Grid, which allows the elements to be fully responsive at any window size 
- All text is in `font-size: 4vh` or `font-size: 7vh`, which also scales with the height of the window
- The full screen format was achieved by using `height: 100vh` on the body and both `height: 90vh` and `width: 90vh` on the container

---

**JavaScript calculation code:** 
- The script works in two steps: 
	1. As each `<button>` (both numbers and operators) is clicked, their text (`this.innerText`) are collected in an array
	2. When `=` is pressed
		* `.join()` is applied to the array, creating a string
		* `eval()` is used to perform a calculation on whatever has been stored in the string 
		* The total is saved in the `sum` variable and printed to the display `tot.textContent = sum`
		* The array is emptied

**Other JavaScript functionality:** 
- When `clear` is pressed
	* The array is emptied
	* The `sum` and display is set to 0 (`tot.textContent = 0`)
- When `.` is pressed twice
	* error message displays 
- When operators `+`, `-`, `*`, `/` are pressed twice
	* error message displays 
  
---

##### Made with grit :tractor: and storytelling :rainbow:
