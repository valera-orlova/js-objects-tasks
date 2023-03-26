// BEGIN
const getDomainInfo = (site) => {
    let siteSplit = site.split('://');
    let siteScheme, siteName;
    if (siteSplit.length == 1) {
        siteScheme = 'http';
        siteName = siteSplit[0];
    } else {
        siteScheme = siteSplit[0];
        siteName = siteSplit[1];
    }
    let domainInfo = {
        "scheme": siteScheme,
        "name": siteName,
    }
    return domainInfo;
}
export default getDomainInfo;
// END