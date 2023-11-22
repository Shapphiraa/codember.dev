import fs from 'fs';

function resolveChallenge () {
  fs.readFile('CHALLENGE_03.txt', 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading')
      throw error
    }

    const text = data.split(/\r\n|\r|\n/,-1)

    const valids = []
    const invalids = []

    for (let i = 0; i < text.length; i++) {
    const array = text[i].split(" ")
    const numbers = array[0].split("-")
    const letter = array[1][0]
    const password = array[2]

    let count = 0

    for (let j = 0; j < password.length; j++) {
      if (password[j] === letter) {
        count ++
      }
    }

    if (+numbers[0] <= count && count <= +numbers[1])
    valids.push(text[i])
    else 
    invalids.push(text[i])
    }

    console.log(invalids[41])
    console.log(invalids[12])
  })
}

resolveChallenge()