import fs from 'fs';

function resolveChallenge () {
  fs.readFile('CHALLENGE_04.txt', 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading')
      throw error
    }

    const text = data.split(/\r\n|\r|\n/,-1)

    const real = []

    for (let i = 0; i < text.length; i++) {
      const array = text[i].split("-")

      const result = []

      for (let j = 0; j < array[0].length; j++) {
        if (Array.from(array[1]).includes(array[0][j]) && !result.includes(array[0][j])) {
           result.push(array[0][j])
        }
      }

      if (result.join("") === array[1])
        real.push(result.join(""))
    }

    console.log(real[32])
    })
  }

resolveChallenge()