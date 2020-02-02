const fs = require ('fs')
const chalk = require('chalk')

const getNotes = function (){
  return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.black.bgGreen('New note added'))
  } else {
    console.log(chalk.black.bgRed('Note title taken'))
  }
  
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
  
}

const removeNote = function (title) {
  const notes = loadNotes();
  const newArray = notes.filter(function (note) {
    return note.title !== title;
    console.log(newArray);
  })

  if (newArray.length < notes.length) {
    console.log(chalk.black.bgGreen(`${title} removed`))
    saveNotes(newArray)
  } else {
  console.log(chalk.black.bgRed(`${title} not found`))
  }
  
} 

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}