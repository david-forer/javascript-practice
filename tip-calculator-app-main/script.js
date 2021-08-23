let billAmount = document.getElementById('billAmount').value
let tipAmount = document.getElementById('tipAmount')

console.log(billAmount)


function tip5() {
  let bill = Number(document.getElementById("billAmount").value);
  console.log(bill)

  let people = Number(document.getElementById("people").value);
console.log(people)

  let tip = Number(bill / people * .05) ;
  document.getElementById("tip").value = tip.toFixed(2);
  console.group(tip)

  let total = Number(bill/people + tip);
  document.getElementById("total-amount").value = total.toFixed(2);
  console.log(total)

}

function tip10() {
  let bill = Number(document.getElementById("billAmount").value);
  console.log(bill)

  let people = Number(document.getElementById("people").value);
console.log(people)

  let tip = Number(bill / people * .10) ;
  document.getElementById("tip").value = tip.toFixed(2);
  console.group(tip)

  let total = Number(bill/people + tip);
  document.getElementById("total-amount").value = total.toFixed(2);
  console.log(total)

}


function tip15() {
  let bill = Number(document.getElementById("billAmount").value);
  console.log(bill)

  let people = Number(document.getElementById("people").value);
console.log(people)

  let tip = Number(bill / people * .15) ;
  document.getElementById("tip").value = tip.toFixed(2);
  console.group(tip)

  let total = Number(bill/people + tip);
  document.getElementById("total-amount").value = total.toFixed(2);
  console.log(total)

}
function tip25() {
  let bill = Number(document.getElementById("billAmount").value);
  console.log(bill)

  let people = Number(document.getElementById("people").value);
console.log(people)

  let tip = Number(bill / people * .25) ;
  document.getElementById("tip").value = tip.toFixed(2);
  console.group(tip)

  let total = Number(bill/people + tip);
  document.getElementById("total-amount").value = total.toFixed(2);
  console.log(total)

}
function tip50() {
  let bill = Number(document.getElementById("billAmount").value);
  console.log(bill)

  let people = Number(document.getElementById("people").value);
console.log(people)

  let tip = Number(bill / people * .50) ;
  document.getElementById("tip").value = tip.toFixed(2);
  console.group(tip)

  let total = Number(bill/people + tip);
  document.getElementById("total-amount").value = total.toFixed(2);
  console.log(total)

}