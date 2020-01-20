const fs = require('fs');

fs.writeFileSync('courseNotes.txt', "The module file system is assigned to the variable fs -> 'const fs = require('fs')'"+'\n\n');
fs.appendFileSync('courseNotes.txt',"fs.writeFileSync('file.name', 'data to write') creates or overwrites that file\n\n");
fs.appendFileSync('courseNotes.txt',"fs.appendFileSync('file.name', 'data to write') adds data to the end of that file\n\n");
fs.appendFileSync('courseNotes.txt',"adding \\n at the end of the data causes the next addition on a new line\n\n");
fs.appendFileSync('courseNotes.txt',"You can link to your own files by providing the relative path ie. require()./fileName.js\n\n");
fs.appendFileSync('courseNotes.txt',"Each individual file has it's own scope so variables do not cross file bounderies\n\n");
fs.appendFileSync('courseNotes.txt',"You can 'explicitly' export variables from one file to another via module.exports = variable in the sending file\n\n");
fs.appendFileSync('courseNotes.txt',"To use the data from module.exports, the receiving file must have const variable = require('relative path to exporting file')\n\n");
fs.appendFileSync('courseNotes.txt',"\n\n");
fs.appendFileSync('courseNotes.txt',"\n\n");
fs.appendFileSync('courseNotes.txt',"\n\n");
fs.appendFileSync('courseNotes.txt',"\n\n");