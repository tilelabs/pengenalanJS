const fs = require('fs')

fs.stat('chandra.txt', function(err, stats) {
  if (err) {
    return console.log(err)
  }

  console.log(stats)
})

fs.unlink('namafile.txt', function(err) {
  if (err) {
    return console.error(err)
  }

  console.log('Success')
})