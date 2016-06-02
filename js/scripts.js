$(document).ready(function() {
$(".blanks form#add").submit(function(event) {
event.preventDefault();
  var number1 = parseInt($('input#firstnum').val());
  var number2 = parseInt($('input#secondnum').val());
  var result = add(number1, number2);
 $("#output").text(result);

});

$(".blanks form#subtract").submit(function(event) {
event.preventDefault();
  var number1 = parseInt($('input#firstnum').val());
  var number2 = parseInt($('input#secondnum').val());
  var result = subtract(number1, number2);
 $("#output").text(result);

});

$(".blanks form#multiply").submit(function(event) {
event.preventDefault();
  var number1 = parseInt($('input#firstnum').val());
  var number2 = parseInt($('input#secondnum').val());
  var result = multiply(number1, number2);
 $("#output").text(result);

});
$(".blanks form#divide").submit(function(event) {
event.preventDefault();
  var number1 = parseInt($('input#firstnum').val());
  var number2 = parseInt($('input#secondnum').val());
  var result = divide(number1, number2);
 $("#output").text(result);

});


});
var add = function(number1, number2) {
return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};
