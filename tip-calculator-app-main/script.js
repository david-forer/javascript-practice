let billAmount = document.getElementById('billAmount').value
let tipAmount = document.getElementById('tipAmount')

console.log(billAmount)


function tip5() {
  let bill = document.getElementById("billAmount").value;
  console.log(bill)

  let people = document.getElementById("people").value;
console.log(people)

  let tip = (bill / people) * .05 ;
  document.getElementById("tip").value = tip.toFixed(2);
  console.group(tip)

  let total = bill + tip / people;
  console.log(total)

}