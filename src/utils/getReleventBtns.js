import { NotesIconBox } from "../styles/styles";

//icons
import { GoArchive, GoPencil, GoTrash, GoHistory } from "react-icons/go";

//redux
import {
  setArchiveNotes,
  setTrashNotes,
  unarchiveNote,
  restoreNote,
  deleteNote,
  setEditNote,
  toggleCreateNoteModal,
} from "../features";

const getReleventBtns = (type, note, dispatch) => {
  const clickHandler = () => {
    dispatch(setEditNote(note));
    dispatch(toggleCreateNoteModal(true));
  };

  if (type === "archive") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(unarchiveNote(note))}
          data-tip="Unarchive">
          <GoArchive />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-tip="Delete">
          <GoTrash />
        </NotesIconBox>
      </>
    );
  } else if (type === "trash") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(restoreNote(note))}
          data-tip="Restore">
          <GoHistory />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(deleteNote(note))}
          data-tip="Delete">
          <GoTrash />
        </NotesIconBox>
      </>
    );
  } else {
    return (
      <>
        <NotesIconBox data-tip="Edit">
          <GoPencil onClick={clickHandler} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setArchiveNotes(note))}
          data-tip="Archive">
          <GoArchive />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-tip="Delete">
          <GoTrash />
        </NotesIconBox>
      </>
    );
  }
};

export default getReleventBtns;
