// BEGIN
const cloneShallow = (object) => {
    let newObject = {};

    for (let i in object) {

        newObject[i] = object[i];
        
    }
    return newObject;
}
export default cloneShallow;
// END
