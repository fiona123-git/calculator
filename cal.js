// logic when  user presses a number value then adds an operatator then  presss the equal sign
//* the answer is given
// defining the elements by id
const keys = document.getElementsByTagName("input");
const result = document.getElementById("result");
const clear = document.getElementById("clear");
const  equalsBtn = document.getElementById("equalsbtn")
equalsBtn.addEventListener("click", calculate);
const opeRators = document.getElementsByClassName("operator")
const nums = document.getElementsByClassName("number")

//  iterates through the operators in the calculator//
for(let i = 0; i < opeRators.length; i++) {
  opeRators[i].addEventListener("click", addToCurrentValue)

}

 for(let b = 0; b < nums.length; b++) {
   nums[b].addEventListener("click", addToCurrentValue)
 }


 // the function above defines the keys that would be used in the calculator
function addToCurrentValue(event) {
  result.innerHTML += event.target.value
     // if its not an operator then its seen as a normal value key
  
}
function calculate() {
 console.log(result.innerHTML)
  result.innerHTML = eval(result.innerHTML);
 
}

clear.addEventListener("click", () => {
  result.innerHTML = "";
});
