/*
	Écrivez une fonction qui prend en entrée une chaîne de caractères et retourne un objet avec la fréquence de chaque caractère. Ignorez les espaces, les caractères spéciaux et la casse (majuscules / minuscules).
*/

const countCharacters = string => {
	const cleanedString = string.toLowerCase().replace(/[^\w]/g, '');
	const charFrequency = {};
	
	for (let char of cleanedString) {
	  if (!charFrequency[char]) {
		charFrequency[char] = 1;
	  } else {
		charFrequency[char]++;
	  }
	}
	
	return charFrequency;
}
  