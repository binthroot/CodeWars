const domainName = (url) => {
  return url.replace(/http:\/\/|https:\/\/|www./gi, '').split('.')[0];
};

const testUrl = 'https://www.google.com';

console.log(domainName(testUrl));
