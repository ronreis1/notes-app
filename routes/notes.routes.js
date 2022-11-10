const { Router } = require('express')
const router = Router()

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNote, 
    deletenote 
} = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/auth');

// Pedir obtener new note
router.get('/notes/add',isAuthenticated, renderNoteForm);

//Server crear Server recibe datos
router.post('/notes/new-note', isAuthenticated, createNewNote)

//Obtener Get all note
router.get('/notes', isAuthenticated, renderNotes)

//Edit Notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm)

//Actualizar datos. Server recibe datos
router.put('/notes/edit/:id', isAuthenticated, updateNote)

//Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, deletenote)




module.exports = router