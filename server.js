const express = require ('express');
const notes = require ('.db/db.json');
const path = require ('path');
const uuid = require ('./helpers/uuid');
const {getNotes, savedNotes} = require('.helpers/notesH');

const Port = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.json ());
app.use(express.static('public'));

// GET request
app.get('/notes', (req, res) => res.sendfile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {res.json(getNotes());
});

// post reqs
app.post('/api/notes', (req, res) => { 
    currentNotes = getNotes(); 
});

// new note instructions
const {title, text} = req.body;
if (title && text) {
    const newNote = {
        id: uuid(),
        title,
        text,
    };
     currentNotes.push(newNote);
     savedNotes(currentNotes);

     res.json(response);
}
     else {
        res.json('Error, please try to save again.')
     };

// DELETE option 
app.delete('/api/notes/:id', (req, res) => {

    let notesId = req.params.id
    let notes = getNotes();
    let noteDelete = notes.filter(function(item) { return item.id === noteId; });

    let index = notes.findIndex(function(item, i) {
      return item.id === notesId
    });
  
      if (index > -1) {
      notes.splice(index, 1);
    }
  
    // save any updated notes to db
    savedNotes(notes);
  
    // return a completed response
    const response = {
      status: 'deleted',
      body: noteDelete,
    };
  
    res.json(response);
  
  });
  
  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
  );

