import { NotesContainer } from "../styles/styles";

import { NoteCard } from "../components";

//filter notes
const filteredNotes = (notes, filter) => {
  //priority
  const nonePriority = notes.filter(({ priority }) => priority === "none");
  const lowPriority = notes.filter(({ priority }) => priority === "low");
  const mediumPriority = notes.filter(({ priority }) => priority === "medium");
  const highPriority = notes.filter(({ priority }) => priority === "high");

  if (filter === "none") {
    return [...nonePriority];
  } else if (filter === "low") {
    return [...lowPriority, ...highPriority];
  } else if (filter === "medium") {
    return [...mediumPriority, ...highPriority];
  } else if (filter === "high") {
    return [...highPriority, ...mediumPriority, ...lowPriority];
  } else if (filter === "latest") {
    return notes.sort((a, b) => b.createdTime - a.createdTime);
  } else if (filter === "created") {
    return notes.sort((a, b) => a.createdTime - b.createdTime);
  } else if (filter === "edited") {
    const editedNotes = notes.filter(({ editedTime }) => editedTime);
    const normalNotes = notes.filter(({ editedTime }) => !editedTime);

    const sortEdited = editedNotes.sort((a, b) => b.editedTime - a.editedTime);

    return [...sortEdited, ...normalNotes];
  } else {
    return notes;
  }
};

const getAllNotes = (mainNotes, filter, searchInput) => {
  const pinned = mainNotes.filter(({ isPinned }) => isPinned);
  const normal = mainNotes.filter(({ isPinned }) => !isPinned);

  //normal notes
  if (normal.length !== 0 && pinned.length === 0) {
    return (
      <>
        <div className="allNotes__notes-type">
          All Notes <span>({normal.length})</span>
        </div>
        <NotesContainer>
          {filteredNotes(normal, filter).map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      </>
    );
  }

  //Pinned notes
  if (pinned.length !== 0 && normal.length === 0) {
    return (
      <>
        <div className="allNotes__notes-type">
          Pinned Notes <span>({pinned.length})</span>
        </div>
        <NotesContainer>
          {pinned.map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      </>
    );
  }

  // All notes
  if (pinned.length !== 0 && normal.length !== 0) {
    return (
      <>
        <div>
          <div className="allNotes__notes-type">
            Pinned Notes <span>({pinned.length})</span>
          </div>
          <NotesContainer>
            {pinned.map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </div>
        <div>
          <div className="allNotes__notes-type">
            All Notes <span>({normal.length})</span>
          </div>
          <NotesContainer>
            {filteredNotes(normal, filter)?.map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </div>
      </>
    );
  }
};

export default getAllNotes;
