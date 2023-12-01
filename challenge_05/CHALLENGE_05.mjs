import fs from 'fs';

function resolveChallenge () {
  fs.readFile('CHALLENGE_05.txt', 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading')
      throw error
    }

    const text = data.split(/\r\n|\r|\n/,-1)

    for (let i = 0; i < text.length; i++) {
        const user = text[i].split(",")
        const id = user[0]
        const username = user[1]
        const email = user[2]
        const age = user[3]
        const location = user[4]

        const alphanumeric = /^([a-zA-Z0-9_-]){1,16}$/
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const number = /[0-9]*$/

        if (!alphanumeric.test(id) || !alphanumeric.test(username) || !emailFormat.test(email) || !number.test(age) || typeof location !== "string")
        console.log(username[0])
    }
    })
  }

resolveChallenge()