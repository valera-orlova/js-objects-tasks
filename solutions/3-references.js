// BEGIN
const compareObj = (object1, object2) => {
    for (let i in object1) {
        if (object1[i] != object2[i]) {
            return false;
        }
    }
    return true;
}

export default compareObj;
// END