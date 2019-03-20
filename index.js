const readline = require('readline-sync')
const robots = {
  text: require('./robots/text.js')
}

async function start() {
  const content = {
    maximumSentences: 7
  }

  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()
  content.lang  = askAndReturnLang()

  await robots.text(content)

  function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ')
  }

  function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of', 'What is its importance?', 'where to buy?']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]
    
    return selectedPrefixText
  }

      function askAndReturnLang(){
        const  lang = ['pt','en']
        const selectedLangIndex = readline.keyInSelect(lang,'Chooce language: ')
        const selectedLangText = lang[selectedLangIndex]
        
        return selectedLangText
      }

  console.log(JSON.stringify(content, null, 4))
}

start()
