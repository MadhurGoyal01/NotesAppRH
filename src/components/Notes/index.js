import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesContainer,
  Heading,
  Form,
  TitleInput,
  NoteTextArea,
  AddButton,
  EmptyNotesViewContainer,
  Image,
  EmptyNotesHeading,
  Description,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [titleInput, setTitleInput] = useState('')
  const [noteText, setNoteText] = useState('')
  const [noteItemsList, setNoteItemsList] = useState([])
  const [editingNoteId, setEditingNoteId] = useState(null)

  const onChangeTitle = event => setTitleInput(event.target.value)

  const onChangeNoteText = event => setNoteText(event.target.value)

  const onAddNotes = event => {
    event.preventDefault()

    // Check if title or note text is empty
    if (titleInput.trim() === '' || noteText.trim() === '') {
      return // Do not add the note if either field is empty
    }

    // If editing, update the note instead of adding a new one
    if (editingNoteId) {
      setNoteItemsList(prevNoteItemsList =>
        prevNoteItemsList.map(note =>
          note.id === editingNoteId ? {...note, titleInput, noteText} : note,
        ),
      )
      setEditingNoteId(null) // Reset editing state
    } else {
      const noteItemObj = {
        id: uuidv4(),
        titleInput,
        noteText,
      }
      // Updating the List and setting input values to none..
      setNoteItemsList(prevNoteItemsList => [...prevNoteItemsList, noteItemObj])
    }

    setNoteText('')
    setTitleInput('')
  }

  // Function to handle Enter key press
  const onKeyDownHandler = event => {
    if (event.key === 'Enter') {
      onAddNotes(event)
    }
  }

  // Function to delete a note by id
  const onDeleteNote = id => {
    const updatedNotesList = noteItemsList.filter(note => note.id !== id)
    setNoteItemsList(updatedNotesList)
  }

  // Function to handle editing a note
  const onEditNote = note => {
    setTitleInput(note.titleInput)
    setNoteText(note.noteText)
    setEditingNoteId(note.id) // Set the id of the note being edited
  }

  return (
    <MainContainer>
      <NotesContainer>
        <Heading>Notes</Heading>
        <Form onSubmit={onAddNotes}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={titleInput}
            onChange={onChangeTitle}
            onKeyDown={onKeyDownHandler}
          />
          <NoteTextArea
            placeholder="Take a Note..."
            value={noteText}
            onChange={onChangeNoteText}
            onKeyDown={onKeyDownHandler}
          >
            {noteText}
          </NoteTextArea>
          <AddButton type="submit">Add</AddButton>
        </Form>
        {noteItemsList.length > 0 ? (
          <NotesList>
            {noteItemsList.map(eachNote => (
              <NoteItem
                key={eachNote.id}
                noteItemDetails={eachNote}
                onDeleteNote={onDeleteNote}
                onEditNote={onEditNote}
              />
            ))}
          </NotesList>
        ) : (
          <EmptyNotesViewContainer>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
            <Description>Notes you add will appear here</Description>
          </EmptyNotesViewContainer>
        )}
      </NotesContainer>
    </MainContainer>
  )
}

export default Notes
