
$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age > 21) {
    $("#drinks").show();
  } else if (age === 21) {
    alert("Now don't go wild!");
    $("#drinks").show();
  } else {
    $("#under-21").show();
  }
});

//test code to understand boolean if statements
/*

$(document).ready(function() {
  const over21 = confirm("are you over 21? Click OK for yes or Cancel for no.");

  if (over21) {
    $("#drinks").show();
  } else {
    $("#under-21").show();
  }
});

*/