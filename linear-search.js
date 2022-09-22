function linearSearch(array, searchTerm) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
	let count = 0;
	for (let i = 0; i < array.length;) {
		if(array[i] == searchTerm) {
			count++;
			return i;
		} else {
			count++;
			i++
		}
	}
	console.log(count);
	return null;
}

module.exports = linearSearch;
