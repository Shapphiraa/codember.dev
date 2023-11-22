import fs from 'fs';

function resolveChallenge () {
  fs.readFile('CHALLENGE_01.txt', 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading')
      throw error
    }

    const text = data.toLowerCase().split(' ')
    
    const words = Array.from(new Set(text))

    const result = []

    let count = 0

    for (let i = 0; i < words.length; i++) {
      count = 0

      for (let j = 0; j < text.length; j++) {
        if (words[i] === text[j])
          count ++
      }

      result.push(words[i])
      result.push(count)

    }

    console.log(result.join(''))
  })
}

resolveChallenge()