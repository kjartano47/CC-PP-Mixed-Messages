//Proverb generator with three parts
/*step 1: create dummy text. three arrays for the three parts of the proverb */

const arr1 = ["Never has the ", "The ", "Alas, ", "Even the "];
const arr2 = ["time ", "apple ", "gator ", "mist "];
const arr3 = ["of the forest ", "of life ", "of death ", "of god "];
const arr4 = [
	"compelled the old beggar",
	"distracted the singing lady",
	"destroyed the confidence of man",
	"exceeded the expectation of god",
];

/*step 2: create a selector/printer that randomly selects one string from each of the three arrays */
const selector = (arr1, arr2, arr3, arr4) => {
	console.log(
		arr1[Math.floor(Math.random() * arr2.length)] +
			arr2[Math.floor(Math.random() * arr2.length)] +
			arr3[Math.floor(Math.random() * arr2.length)] +
			arr4[Math.floor(Math.random() * arr2.length)]
	);
};

selector(arr1, arr2, arr3, arr4);
