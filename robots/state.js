const fs = require('fs')
const contentFilePath = './content.json'

// metodo para salvar.
function save(content) {
	const contentString = JSON.stringify(content)
	return fs.writeFileSync(contentFilePath, contentString)
  }

// metodo para carregar.

function load() {
	const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8')
	const contentJson = JSON.parse(fileBuffer)
	return contentJson
  }


  module.exports = {
	save,
	load
  }