const express = require ('express');
const notes = require ('.db/db.json');
const path = require ('path');

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
    savedNotes = getNotes(); 
});

// new note instructions
const {title, text} = req.body;
if (title && text) {
    const newNote = {
        id: nnid(),
        title,
        text,
    };
    savedNotes.push(newNote);
    
}
