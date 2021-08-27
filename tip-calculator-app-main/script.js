// let billAmount = document.getElementById("billAmount").value;
// let tipAmount = document.getElementById("tipAmount");
// let customInput = document.getElementById("customInput").value;

// console.log(billAmount);

function tip(percentage) {
  let bill = Number(document.getElementById("billAmount").value);
  console.log(bill);

  let people = Number(document.getElementById("people").value);
  console.log(people);

  let tip = Number((bill / people) * percentage);
  document.getElementById("tip").value = tip.toFixed(2);
  console.group(tip);

  let total = Number(bill / people + tip);
  document.getElementById("total-amount").value = total.toFixed(2);
  console.log(total);
}


function customTip() {
  let bill = Number(document.getElementById("billAmount").value);
  console.log(bill);

  let people = Number(document.getElementById("people").value);
  console.log(people);

  let input = Number(document.getElementById('customInput').value)
  // input.addEventListener('input', tip);
  console.log(input)

  let tip = Number((bill / people) * input);
  document.getElementById("tip").value = tip.toFixed(2);
  console.group(tip);

  let total = Number(bill / people + tip);
  document.getElementById("total-amount").value = total.toFixed(2);
  console.log(total);
}

function resetPage() {
  location.reload();
}
