import _ from 'lodash';

// BEGIN
const normalize = (object) => {
  let name = _.capitalize(object.name);
  object.name = name;
  
  let description = object.description.toLowerCase();
  object.description = description;
}
export default normalize;
  // END