
document.querySelector("#btnToFahrenheit").addEventListener('click',
  function(){ celsiusToFahrenheit(txtCelsius.value, "resultFahren") });
function celsiusToFahrenheit(number , id)
{
  let result = (number * 1.8) + 32;
    document.getElementById(id).innerHTML =  result.toFixed(2) + "°F";
}

document.querySelector("#btnToCelsius").addEventListener('click',
  function(){ fahrenheitToCelsius(txtFahren.value, "resultCelsius" ) });
function fahrenheitToCelsius(number, id)
{
    let result = (number - 32) / 1.8;
    document.getElementById(id).innerHTML =  result.toFixed(2) + "°C";
}
