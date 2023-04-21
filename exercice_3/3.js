/*
	Écrivez une fonction qui prend en entrée un tableau de nombres et retourne un nouveau tableau contenant uniquement les nombres pairs.
*/

const filterEvenNumbers = numbersArray => {
	const evenNumbers = numbersArray.filter(number => number % 2 === 0);
	return evenNumbers;
  }