const readline = require('readline-sync')
const state = require('./state.js')


function robot() {
	const content = {
		maximumSentences: 7
	}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()
	content.lang = askAndReturnLanguage()
	state.save(content)

	function askAndReturnSearchTerm() {
		return readline.question('Digite um termo de pesquisa da Wikipedia: ')
	}

	function askAndReturnPrefix() {
		const prefixes = ['Quem é', 'O que é', 'A História de']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opção: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
	}

	function askAndReturnLanguage() {
    	const language = ['pt','en']
    	const selectedLangIndex = readline.keyInSelect(language,'Escolha um idioma: ')
    	const selectedLangText = language[selectedLangIndex]
    	return selectedLangText
  	}


}


module.exports = robot
	