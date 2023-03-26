// BEGIN
const get = (object, array) => {
    let newObject = {}
    for (let i in object) {
        newObject[i] = object[i];
      }

    for (let i of array) {

        if (Object.hasOwn(newObject, i)) {

            newObject = newObject[i]
        } 
        else {
            return null;
        }
    }
    return newObject;
}
export default get;
// END