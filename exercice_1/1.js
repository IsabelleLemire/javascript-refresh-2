/*
	Écrivez une fonction qui prend en entrée une température en degrés Celsius et la convertit en degrés Fahrenheit.

	°F = (°C × 9/5) + 32
*/

const celsiusToFahrenheit = celsius => {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}