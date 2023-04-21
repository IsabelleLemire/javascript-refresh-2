/*
	Écrivez une fonction qui prend en entrée un nombre entier positif et retourne sa factorielle. Utilisez une approche récursive pour résoudre cet exercice.

	n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1

	Par convention, on considère que le factoriel de 0 (0!) est égal à 1.

	Voici quelques exemples de factoriels :

	1! = 1
	2! = 2 × 1 = 2
	3! = 3 × 2 × 1 = 6
	4! = 4 × 3 × 2 × 1 = 24
	5! = 5 × 4 × 3 × 2 × 1 = 120
*/

const factorial = n => {
	// Cas de base : si n est égal à 0, retourne 1
	if (n === 0) {
	  return 1;
	} else {
	  // Appel récursif : multiplie n par le résultat de l'appel récursif avec n-1 comme argument
	  return n * factorial(n - 1);
	}
  }