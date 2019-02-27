const readline = require('readline-sync')
function start() {
    const content = {}
  
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnprefix ()

    function askAndReturnSearchTerm() {
    	return readline.question('Type  a Wikipedia search term: ')
    }	   
   
    function askAndReturnprefix (){
      const prefixes = ['who is','what is', 'the  history of'] 
      const selectedPrefixIndex = readline.keyInSelect(prefixes, 'choose one  option: ')
      const selectedPrefixText  = prefixes[selectedPrefixIndex]
      
      return selectedPrefixText

    }
    console.log(content)	   
}

start()
