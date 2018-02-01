document.getElementById("btn").addEventListener("click", function values() {
  var side1 = 1 * document.getElementById("input1").value;
  var side2 = 1 * document.getElementById("input2").value;
  var side3 = 1 * document.getElementById("input3").value;
  var p = side1 + side2 + side3;
  var x = p - side1;
  var y = p - side2;
  var z = p - side3;
  var area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  var output = area.toFixed(2);

  if (isNaN(output) == true) {
    output = "Input is not a number.";
  } else {
    output;
  }

  document.getElementById("result").innerHTML = output;
});
