function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	// for (i = 1; i < array.length; i++) {
	// 	let num = i;
	// 	while (array[num] < array[num-1]) {
	// 		let tmp = array[num-1]
	// 		array[num-1] = array[num];
	// 		array[num] = array[tmp];
	// 		num --;
	// 	}
	// }

	let n = array.length;
        for (let i = 1; i < n; i++) {
            let current = array[i];
            let j = i-1; 
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
	return array;
}

module.exports = insertionSort;
