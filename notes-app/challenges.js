// Challenge 1: Section 9 Importing Node.js Core Modules: Append a message to notes.txt

// 1. use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

// const fs = require('fs')

// try {
//     fs.appendFileSync('notes.txt', 'The Location that this was done is in California')
// } catch(err) {
//     console.log(err);
// }

// Challenge 2: Section 10 Importing your own Files: Define and use a function in a new File

// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes Function
// 4. From app.js load in and call the function printing the message to console.

// getNotes = () => {
//     return 'Your notes...';
// }

// module.exports = getNotes;

// const notes = require('./notes')

// const getNotes = notes();

// console.log(getNotes)

// Challenge 3: Section 12 Printing in color: Use the chalk library in your project.

// 1. Install version 2.4.1 of chalk
// 2. Load chalk into the app.js
// 3. Use it to print the string "success!" to the console in green
// 4. Test your Worker.

// Bonus: Use docs to mess around with other styles. Make text bold and inversed.
// npm install chalk@2.4.1

//Challenge 4: Section 16 Argument parsing with yargs: Part I: Add two new commands
// 1. setup command to support "list" command (print placeholder message for now)
// 2. setup command to support "read" command (print placeholder message for now)
// 3. test your work by running both commands and ensure correct output

// const yargs = require('yargs');

// yargs.command({
//     command: 'read',
//     describe: 'This allows you to read a comment',
//     handler: function() {
//         console.log("Read the comment")
//     }
// })

// yargs.command({
//     command: "list",
//     describe: "Listing notes",
//     handler: function() {
//         console.log("Listed notes")
//     }
// })

// Challenge 5: Section 17 Argument parsing with yargs Part II: Add an option to yargs
// 1. Setup a body option for the add command
// 2. configure a description, make it require, and for it to be a String
// 3. log the body value in the handler function
// 4. test your work

// const yargs = require('yargs');

// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'This is the body of the note',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv) {
//         console.log("Title: ", argv.title)
//         console.log("Body: ", argv.body)
//     }
// })

// Challenge 6: Section 18 Storing Data with JSON: Work with JSON and the file system
// 1. Load and parse the JSON Data
// 2. change the name and age property with your info
// 3. stringify the changed object and overwrite the original Data
// 4. test your work by viewing data in the JSON file

// const fs = require('fs')

// const buffer = fs.readFileSync('1-json.json')
// const dataJson = buffer.toString()
// const data = JSON.parse(dataJson)
// data.name = 'Jack'
// data.age = 24

// const dataStringed = JSON.stringify(data);
// const returnedData = fs.writeFileSync('1-json.json', dataStringed)

// Challenge 7: Section 20 Removing a note: Setup Command option and function
// 1. setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command Handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"
