function pesosDolares(valNum) {
  document.getElementById("inputDolares").value = valNum * 0.055;
}
function dolaresPesos(valNum) {
  document.getElementById("inputPesosMexicanos").value = valNum * 17.5;
}

function celsiusFar(valNum) {
  document.getElementById("inputFahrenheit").value = (valNum * 9) / 5 + 32;
}

function fahrenheitCel(valNum) {
  document.getElementById("inputCelsius").value = (valNum - 32) * (5 / 9);
}
