#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const fileName = 'notes.json';

const addNote = (title, body) => {
  const notes = loadNotes();
  if (notes.some(note => note.title === title)) {
    console.log(chalk.bgRed(`Cannot add note with duplicate title "${title}"`));
  } else {
    console.log(chalk.bgGreen('Adding note'));
    notes.push({
      title,
      body
    });
    saveNotes(notes);
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const prunedNotes = notes.filter((note) => {
    return title !== note.title;
  });
  if (prunedNotes.length === notes.length) {
    console.log(chalk.bgRed('No note found!'));
  } else {
    console.log(chalk.bgGreen('Note removed!'));
    saveNotes(prunedNotes);
  }
};

const saveNotes = (notes) => {
  try {
    const serializedNotes = JSON.stringify(notes);
    fs.writeFileSync(fileName, serializedNotes);
    return {
      status: 'ok',
      result: 'saved notes'
    };
  } catch(e) {
    return {
      status: 'error',
      result: 'something went wrong'
    };
  }
};

const loadNotes = () => {
  let parsedData;
  try {
    const dataBuffer = fs.readFileSync(fileName);
    const dataJson = dataBuffer.toString();
    parsedData = JSON.parse(dataJson);
  } catch (e) {
    parsedData = [];
  }
  return parsedData; 
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note, index) => {
    console.log(`${chalk.bgBlue(index)}: "${chalk.green(note.title)}"`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const theNote = notes.find(note => note.title === title);
  if (theNote) {
    console.log(chalk.blue(theNote.title));
    console.log(theNote.body);
  } else {
    console.log(chalk.bgRed(`There is not note with title "${title}"`));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};