import _ from 'lodash';

// BEGIN
const fill = (object1, array, object2) => {
    let obj = {};
    if (array.length == 0) {
        for (let i in object2) {
            object1[i] = object2[i];
        }
    } 
    else {
        for (let i of array) {
            obj[i] = object2[i];
        }
        for (let i of array) {
            object1[i] = obj[i]
        }
    }
    
    return object1;

}

export default fill;
// END