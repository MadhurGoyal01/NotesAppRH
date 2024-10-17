import {MdDelete, MdEdit} from 'react-icons/md' // Import the edit icon

import {
  ListItem,
  Title,
  Note,
  TitleAndDeleteButtonCon,
  ActionButtonsCon, // A container for both delete and edit buttons
} from './styledComponents'

const NoteItem = props => {
  const {noteItemDetails, onDeleteNote, onEditNote} = props
  const {id, titleInput, noteText} = noteItemDetails

  const onDeleteNoteFunction = () => {
    onDeleteNote(id)
  }

  const onEdit = () => {
    onEditNote(noteItemDetails)
  }

  return (
    <ListItem>
      <TitleAndDeleteButtonCon>
        <Title>{titleInput}</Title>
        <ActionButtonsCon>
          <MdEdit
            type="button"
            onClick={onEdit}
            style={{cursor: 'pointer', marginRight: '10px'}}
          />
          <MdDelete
            type="button"
            onClick={onDeleteNoteFunction}
            style={{cursor: 'pointer'}}
          />
        </ActionButtonsCon>
      </TitleAndDeleteButtonCon>
      <Note>{noteText}</Note>
    </ListItem>
  )
}

export default NoteItem
