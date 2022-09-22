function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
    
    let sorted = false;
    let count = 0;

    while(sorted == false){
        sorted = true;
        for(let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp
                count += 1;
                sorted = false;
            }
        }
    }
    // console.log(count);
	return array;
}

module.exports = bubbleSort;
