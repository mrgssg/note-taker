const fs = require('fs')

// get notes from the DB
const getNotes = () => {
    let data = fs.readFileSync('./db/db.json', 'utf8')
    if (data != null) {
    notes = JSON.parse(data);
    }
    else {
        notes = [];
    }
    return notes;
}

// save current notes to the db
const savedNotes = (notes) => {
    try {
        fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    getNotes, 
    savedNotes
};