
var a,b, result;
function setValues() {
  a = Number(document.getElementByID("numberOne").value);
  b = Number(document.getElementByID("numberTwo").value);
}

function addNumbers() {
  setValues();
  result = number1 + number2;
  alert("The Sum is equal to" +result)
}

function subtractnumbers() {
  setValues();
  result = number1 - number2;
  alert("The rest is equal to" +result)
}

function dividenumbers() {
  setValues();
  result = number1 / number2;
  alert("The operation is equal to" +result)
}

function multiplynumbers() {
  setValues();
  result = number1 * number2;
  alert("The operation is equal to" +result)
}
