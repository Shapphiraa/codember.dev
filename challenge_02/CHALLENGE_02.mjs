import fs from 'fs';

function resolveChallenge () {
  fs.readFile('CHALLENGE_02.txt', 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading')
      throw error
    }

    let count = 0

    const result = []

    for (let i = 0; i < data.length; i++) {
      if (data[i] === "#") {
        count++
        continue
      }
      
      if (data[i] === "@"){
        count--
        continue
      }
      
      if (data[i] === "*") {
        count = count * count
        continue
      }

      result.push(count)
      }
    
      console.log(result.join(""))
    })
  }

resolveChallenge()