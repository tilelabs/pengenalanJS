const fs = require('fs')

fs.open('namafile.txt', 'w', (err, file) => {
  if(err) {
    return console.error(err)
  }

  console.log('Saved!')
})