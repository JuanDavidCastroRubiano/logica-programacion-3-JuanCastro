function calcularFactorial() {

let numero =
document.getElementById("numero").value;

numero = Number(numero);

let resultado =
document.getElementById("resultado");

if (isNaN(numero) || numero < 0) {

resultado.innerHTML =
"⚠️ Ingresa un número válido";

return;

}

let factorial = 1;

for (let i = 1; i <= numero; i++) {

factorial *= i;

}

resultado.innerHTML =
'<i class="bi bi-check-circle-fill text-primary"></i> ' +
"El factorial de "
+ numero +
" es: <strong>"
+ factorial +
"</strong>";
+ numero +
" es: <strong>"
+ factorial +
"</strong>";0

}


function limpiarCampo() {

document.getElementById("numero").value = "";

document.getElementById("resultado").innerHTML =
"Aquí aparecerá el resultado";

}