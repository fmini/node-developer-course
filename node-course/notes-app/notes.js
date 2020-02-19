const fs = require ('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
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

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const removeNote = title => {
  const notes = loadNotes();
  const newArray = notes.filter(note => note.title !== title)

  if (newArray.length < notes.length) {
    console.log(chalk.black.bgGreen(`${title} removed`))
    saveNotes(newArray)
  } else {
  console.log(chalk.black.bgRed(`${title} not found`))
  }
} 

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your notes'))
  notes.forEach(note => {
    console.log(note.title)
  });
}

const readNote = title => {
  const notes = loadNotes()
  const noteToRead = notes.find((note) => note.title === title)
    if (noteToRead){
    console.log(chalk.yellow(noteToRead.title))
    console.log(noteToRead.body)
  } else {
    console.log(chalk.red.inverse(`${title} not found`))
  }
}

module.exports = {
  //getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}