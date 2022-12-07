              <!-- Task - 3 Start -->

let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let num3 = Number(prompt("Enter the third number: "));

function addition(num1, num2, num3) {
  document.write(num1 + " + " + num2 + " + " + num3 + " = " + (num1 + num2 + num3));
}

function subraction(num1, num2, num3) {
  document.write(
    "<br/>" + num3 + " - " + num2 + " - " + num1 + " = " + (num3 - num2 - num1)
  ); 
}

function multiplication(num1, num2, num3) {
  document.write(
    "<br/>" + num3 + " * " + num2 + " * " + num1 + " = " + num3  *  num2  *  num1
  );
}

function division(num1, num2, num3) {
  document.write(
    "<br/>" +
      "(" +
      num3 +
      " / " +
      num2 +
      ")" +
      " / " +
      num1 +
      " = " +
      num3 / num2 / num1
  );
}

document.write("<h4>Function Showing Addition</h4>");
addition(num1, num2, num3);

document.write("<h4>Function Showing Subraction</h4>");
subraction(num1, num2, num3);

document.write("<h4>Function Showing Multiplication</h4>");
multiplication(num1, num2, num3);

document.write("<h4>Function Showing Division</h4>");
division(num1, num2, num3);

                <!-- Task - 3 End -->