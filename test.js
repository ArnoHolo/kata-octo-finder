const octoFinder = require('./octo-finder')
const users = require('./octos')

describe('Exploring the octo world', () => {
  it('should return all octos from the WEBF tribe', function () {
    expect(octoFinder.findWebfOctos(users))
      .toEqual(['Pierrette', 'Antoine', 'Léo', 'Brandone'])
  })

  it('should return all octos whose best friend is NOT in their own tribe', function () {
    expect(octoFinder.findSocialOctos(users))
      .toEqual(['Arnaud', 'Mila', 'Léo'])
  })

  it('should find octos who like java and dont like javascript or node', function () {
    expect(octoFinder.findJavaScriptHaters(users))
      .toEqual(['Mila', 'Nelson'])
  })

  it('should find all the langages that octos like, without duplications', function () {
    expect(octoFinder.findOctoLangages(users))
      .toEqual(['javascript', 'node', 'java', 'c#', 'php', 'ruby', 'python'])
  })

  it('should find the perso who is the most appreciated by his/her colleagues', function () {
    expect(octoFinder.findTheMostAppreciatedOcto(users))
      .toEqual({ id: 2, name: 'Pierrette' })
  })

  it('should find the biggest tribe', function () {
    expect(octoFinder.findTheBiggestTribe(users))
      .toEqual('WEBF')
  })

  it('should find all distinct octo polygrams sorted by polygram then by polygram length', function () {
    expect(octoFinder.findAllPolygrams(users)).toEqual([
      'AHU',
      'ARD',
      'BRM',
      'GUE',
      'LJA',
      'MID',
      'NDC',
      'PBB',
      'RED',
      'CHAN',
      'JUXI'
    ])
  })
})
