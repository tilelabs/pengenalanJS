const fs = require('fs')

fs.appendFile('chandra.txt', 'Hello world', function() {
  console.log('Berhasil menulis file.')
})