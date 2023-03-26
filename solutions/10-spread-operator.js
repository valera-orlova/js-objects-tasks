// BEGIN
const make = (name, object = {}) => {
    let companyState, companyCreatedAt;
    if (object.state) {
        companyState = object.state;
    } else {
        companyState = 'moderating'
    }

    if (object.createdAt) {
        companyCreatedAt = object.createdAt;
    } else {
        companyCreatedAt = Date.now();
    }

    let company = {
        'name': name,
        'state': companyState,
        'createdAt': companyCreatedAt,
    }

    for (let i in object) {
        company[i] = object[i];
    }

    return company;
}

export default make;
// END