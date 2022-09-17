function linearSearch(array, searchTerm) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
	for (let i = 0; i < array.length;) {
		if(array[i] == searchTerm) {
			return i;
		} else {
			i++
		}
	}

	return null;
}

module.exports = linearSearch;
