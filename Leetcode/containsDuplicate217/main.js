const containsDuplicates = (array) => {
    let numSet = new Set();
    for (const el of array) {
        if (numSet.has(el)) {
            return true;
        } else {
            numSet.add(el)
        }
    }
    return false;
}

// valid anagram

const validAnagram = (str1, str2) => {
    
}