var runningTotal = 0.0;

function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
  //IF newItem is not a number
  // THEN show an alert: "Enter price as a number"
  if(isNaN(newItem) == true)
  {
    alert("Enter price as a number");
  }
  //OTHERWISE,
  // update newItem to its value cast as a number
  // update runningTotal to be its value plus newItem
  // create a variable called dollars
  // call asCurrency() by with the value of runningTotal and assign the return value to dollars
  // update the innerHTML of the span with the id "subtotal" to be dollars
  // update the value of the input with the id "price" to be an empty string
  // update a cookie called "preTax" with the value of runningTotal
  else
  {
    newItem = Number(newItem);
    runningTotal = runningTotal + newItem;
    var dollars = asCurrency(runningTotal);
    document.getElementById("subtotal").innerHTML= dollars;
    document.getElementById("price").value= "";
    setCookie("preTax", runningTotal, 1);
  }
}

//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

First, create a new function in sales.js called calculateReceipt() but leave it empty for now.
Then, open receipt.html and locate the body element. Add an onload event that calls calculateReceipt()
Now, within your new function, get the preTax cookie and assign it to a variable called receiptSubtotal. Make sure to cast it to a number
Create another variable called receiptTax. Assign it the value of receiptSubtotal multiplied by 0.075 (in other words, calculate 7.5% of preTax).
Create a third variable called receiptTotal and assign it to the sum of the subtotal plus the taxes (which you just calculated)
Once you have calculated those values, have your function update the h2 tags with the respective id: sub, tax, and tot
Make sure the values are output as currency (e.g. with $xx.xx format) and not just as numbers.

function calculateReceipt()
{
  receiptSubtotal = Number(receiptSubtotal);
  receiptSubtotal = getCookie("preTax");
  var receiptTax = receiptSubtotal * 0.075;
  var receiptTotal = receiptSubtotal + receiptTax;
  document.getElementById("sub").value= receiptSubtotal;
  document.getElementById("tax").value= receiptTax;
  document.getElementById("tot").value= receiptTotal;
}
