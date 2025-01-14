function getLastPartOfURL(url) {
  const splittedURL = url.split('/');
  console.log(splittedURL[splittedURL.length - 1]);
  return splittedURL[splittedURL.length - 2];
}

function getStat(stat) {
  const id = parseInt(getLastPartOfURL(stat.stat.url));
  return {
    1: { hp: stat.base_stat },
    2: { attack: stat.base_stat },
    3: { defense: stat.base_stat },
    4: { special_attack: stat.base_stat },
    5: { special_defense: stat.base_stat },
    6: { speed: stat.base_stat },
  }[id];
}
module.exports = { getLastPartOfURL, getStat };
