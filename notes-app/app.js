const notes = require("./notes");
const yargs = require("yargs");
const chalk = require("chalk");

//customize yargs version
yargs.version("1.1.0");

//add, remove, read, list notes

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "This is the body of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Removing a note!");
    notes.removeNote(argv.title);
  }
});

// create read command
yargs.command({
  command: "read",
  describe: "This allows you to read a comment",
  handler: function() {
    console.log("Read the comment");
  }
});

// create list command
yargs.command({
  command: "list",
  describe: "Listing notes",
  handler: function() {
    console.log("Listed notes");
  }
});

yargs.parse();
