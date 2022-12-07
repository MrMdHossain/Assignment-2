                      <!-- Task - 1 Start -->

document.write("<h3>Showing A Letter Grade</h3>");
let mark = Number(prompt("Enter Your Mark: "));
mark = parseInt(mark / 10);
switch (mark) {
  case 10:
  case 9:
  case 8:
    document.write("Congralutation! You have got A+");
    break;
  case 7:
    document.write("You have got A");
    break;
  case 6:
    document.write("You have got A-");
    break;
  case 5:
    document.write("You have got B");
    break;
  case 4:
    document.write("You have got C");
    break;
  default:
    document.write("Sorry! You have Failed!!.");
}

<!-- Task - 1 End -->