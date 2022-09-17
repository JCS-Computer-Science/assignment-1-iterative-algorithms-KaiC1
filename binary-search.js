function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	let firstIndex = 0;
	let lastIndex = array.length - 1; 
	let found = false;
	let searchTermIndex = -1;
	
	if(lastIndex % 2 == 1) {
		if (array[lastIndex] == searchTerm) {
			found = true;
			searchTermIndex = lastIndex;
		} else {
			lastIndex--;
		}
	}

	
	while (found == false) {
		let midIndex = (firstIndex + lastIndex) / 2;
		if (array[midIndex] == searchTerm) {
			found = true;
			searchTermIndex = midIndex;
			break;
		} else if (array[midIndex] > searchTerm) {
			lastIndex = midIndex - 1;
		} else if (array[midIndex] < searchTerm) {
			firstIndex = midIndex + 1;
		}
	}
	return searchTermIndex

	return null;
}

module.exports = binarySearch;
