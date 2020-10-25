const fs = require('fs')

fs.rename('namafile.txt', 'chandra.txt', function(err) {
  if (err) {
    return console.error(err)
  }

  console.log('Success')
})