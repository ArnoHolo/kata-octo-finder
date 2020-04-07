// Sans lodash :)

function findWebfOctos (octos) {
  return octos.filter(octo => octo.tribe === 'WEBF')
    .map(_octoName)
}

// ----

function findSocialOctos (octos) {
  return octos.filter(_favoriteCoworkerDifferentTribe)
    .map(_octoName)
}

function _favoriteCoworkerDifferentTribe (octo) {
  if (!octo.favoriteCoworker) {
    return false
  }
  return octo.tribe !== octo.favoriteCoworker.tribe
}

// ----

function findJavaScriptHaters (octos) {
  return octos.filter(_javascriptHaters)
    .map(_octoName)
}

function _javascriptHaters (octo) {
  return octo.langages.some(_equalsJava) &&
    octo.langages.every(_differentJavascript)
}

function _equalsJava (language) {
  return language === 'java'
}

function _differentJavascript (language) {
  return !['javascript', 'node'].includes(language)
}

// ----

function findOctoLangages (octos) {
  return octos.flatMap(octo => octo.langages).filter(_onlyUnique)
}

// Found on stackoverflow
function _onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}

// ----

function findTheMostAppreciatedOcto (octos) {
  const favoriteCoworkerPolygrams = octos.map(_extractFavoriteCoworkerPolygram)
  const mostAppreciatedPolygram = _elementWithHighestOccurence(favoriteCoworkerPolygrams)
  const mostAppreciatedOcto = octos.find(octo => octo.polygram === mostAppreciatedPolygram)
  return _onlyIdAndName(mostAppreciatedOcto)
}

function _onlyIdAndName ({ id, name }) {
  return { id, name }
}

// ----

function findTheBiggestTribe (octos) {
  const tribes = octos.map(octo => octo.tribe)
  return _elementWithHighestOccurence(tribes)
}

// ----

function findAllPolygrams (octos) {
  const octoPolygrams = octos.map(octo => octo.polygram)
  const octoFavoriteCoWorkersPolygrams = octos.map(_extractFavoriteCoworkerPolygram)
  return octoPolygrams
    .concat(octoFavoriteCoWorkersPolygrams)
    .filter(a => a) // To remove null values
    .filter(_onlyUnique)
    .sort(_sortByName)
    .sort(_sortByLength)
}

function _sortByName (a, b) {
  return a.localeCompare(b)
}

function _sortByLength (a, b) {
  return a.length - b.length
}

// ----

function _octoName (octo) {
  return octo.name
}

function _extractFavoriteCoworkerPolygram (octo) {
  return octo.favoriteCoworker && octo.favoriteCoworker.polygram
}

// Found on stackoverflow
function _elementWithHighestOccurence (array) {
  return array.sort((a, b) =>
    array.filter(v => v === a).length -
    array.filter(v => v === b).length
  ).pop()
}

module.exports = {
  findWebfOctos,
  findSocialOctos,
  findJavaScriptHaters,
  findOctoLangages,
  findTheMostAppreciatedOcto,
  findTheBiggestTribe,
  findAllPolygrams
}
