const fs = require('fs');

fs.writeFileSync('notes.txt', "The module file system is assigned to the variable fs -> 'const fs = require('fs')'"+'\n\n');

// Challenge: Append a message to notes.txt
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt',"fs.writeFileSync('file.name', 'data to write') creates or overwrites that file\n\n");
fs.appendFileSync('notes.txt',"fs.appendFileSync('file.name', 'data to write') adds data to the end of that file\n\n");
fs.appendFileSync('notes.txt',"adding \\n at the end of the data causes the next addition on a new line\n\n");
