import _ from 'lodash';

// BEGIN
const countWords = (words) => {
    let wordsLower = words.toLowerCase();
    let wordsSplit = wordsLower.split(' ');
    let object = {};
    if (words.length == 0) return {}
    for (let i of wordsSplit) {
        if (object[i]) {
            object[i] += 1;
        } else {
            object[i] = 1;
        }
    } 

    return object;
}


export default countWords;
// END