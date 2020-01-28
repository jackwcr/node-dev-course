const fs = require('fs')


const buffer = fs.readFileSync('1-json.json')
const dataJson = buffer.toString() 
const data = JSON.parse(dataJson)
data.name = 'Jack'
data.age = 24

const dataStringed = JSON.stringify(data);
const returnedData = fs.writeFileSync('1-json.json', dataStringed)
