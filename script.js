var number = document.querySelectorAll(".number");
var output = document.querySelector(".display").innerHTML;
var functions = document.querySelectorAll(".function");
var clear = document.querySelector(".clear");
var modulo = document.querySelector(".modulo");
var equals = document.querySelector("#equalto");
var erase = document.querySelector(".erase");

erase.addEventListener("click", function () {
  output = output.substring(0, output.length - 1);
  document.querySelector(".display").innerHTML = output;
});
clear.addEventListener("click", function () {
  output = "";
  document.querySelector(".display").innerHTML = output;
});
modulo.addEventListener("click", function () {
  output += modulo.innerHTML;
  document.querySelector(".display").innerHTML = output;
});
equals.addEventListener("click", function () {
  output = eval(output);
  document.querySelector(".display").innerHTML = output;
});
 number[9].addEventListener("contextmenu", function()
 {
   output += number[9].innerHTML[1]
    document.querySelector(".display").innerHTML = output;
})
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    output += number[i].innerHTML[0];
    document.querySelector(".display").innerHTML = output;
  });
}
for (let i = 0; i < functions.length - 1; i++) {
  functions[i].addEventListener("click", function () {
    output += functions[i].innerHTML;
    document.querySelector(".display").innerHTML = output;
  });
}
