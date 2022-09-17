function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	
	// let startingIndex = 0;
	// while(startingIndex < array.length) {
	// 	let lowestNumber = 0;
	// 	let lowestNumberIndex = 0;
	// 	for (let i = startingIndex; i < array.length; i++) {
	// 		if (i = startingIndex){
	// 			lowestNumber = array[i];
	// 			lowestNumberIndex = i;
	// 		} else {
	// 			if ( array[i] < lowestNumber) {
	// 				lowestNumber = array[i];
	// 				lowestNumberIndex = i;
	// 			}
	// 		}
	// 	}
	// 	let element = array.splice(lowestNumberIndex, 1)[0];
	// 	array.splice(startingIndex, 0, element);

	// 	startingIndex++;
	// }
	let n = array.length;

	for(let i = 0; i < n; i++) {
		let min = i;
		for(let j = i+1; j < n; j++){
			if(array[j] < array[min]) {
				min = j;
			}
		}
		if (min != i) {
			let tmp = array[i];
			array[i] = array[min];
			array[min] = tmp;
		}
	}
	return array;
}

module.exports = selectionSort;
