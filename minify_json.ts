import fs from 'fs/promises'
fs.readFile('./facepacks.raw.json', 'utf-8').then(str => JSON.stringify(JSON.parse(str)))
    .then(str => fs.writeFile('./facepacks.json', str)).finally(() => console.log("Job done."))