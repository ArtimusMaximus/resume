const fs = require('fs')

const dir = 'cert_pdf'


fs.readdirsync(dir, (file) => {
	console.log(file)
})