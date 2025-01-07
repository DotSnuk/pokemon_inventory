function getLastPartOfURL(url) {
  const splittedURL = url.split('/');
  console.log(splittedURL[splittedURL.length - 1]);
  return splittedURL[splittedURL.length - 2];
}

module.exports = { getLastPartOfURL };
