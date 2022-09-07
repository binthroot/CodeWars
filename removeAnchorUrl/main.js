function removeUrlAnchor(url) {
  if (url.includes('#')) return url.slice(0, url.indexOf('#'));
  return url;
}

//code wars 7kyu remove anchor from URL
