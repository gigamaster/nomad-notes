import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import notes from "../../notesData";

const initialState = {
  mainNotes: [...notes],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};

const notesListSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    setMainNotes: (state, { payload }) => {
      if (state.mainNotes.find(({ id }) => id === payload.id)) {
        state.mainNotes = state.mainNotes.map((note) =>
          note.id === payload.id ? payload : note
        );
      } else {
        state.mainNotes.push(payload);
      }
    },

    setArchiveNotes: (state, { payload }) => {
      state.mainNotes = state.mainNotes.filter(({ id }) => id !== payload.id);
      state.archiveNotes.push({ ...payload, isPinned: false });
      toast.warning("The note has been archived.");
    },

    setTrashNotes: (state, { payload }) => {
      state.mainNotes = state.mainNotes.filter(({ id }) => id !== payload.id);
      state.archiveNotes = state.archiveNotes.filter(
        ({ id }) => id !== payload.id
      );
      state.trashNotes.push({ ...payload, isPinned: false });
      toast.error("The note was moved to trash!");
    },

    unarchiveNote: (state, { payload }) => {
      state.archiveNotes = state.archiveNotes.filter(
        ({ id }) => id !== payload.id
      );
      state.mainNotes.push(payload);
      toast.success("The note has been unarchived.");
    },

    restoreNote: (state, { payload }) => {
      state.trashNotes = state.trashNotes.filter(({ id }) => id !== payload.id);
      state.mainNotes.push(payload);
      toast.success("The note has been restored.");
    },
    deleteNote: (state, { payload }) => {
      state.trashNotes = state.trashNotes.filter(({ id }) => id !== payload.id);
      toast.error("The note is permanently deleted!");
    },

    setPinnedNotes: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) =>
        note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
      );
      toast.info("The note is pinned.");
    },
    setEditNote: (state, { payload }) => {
      state.editNote = payload;
      console.log(state.mainNotes);
    },
    readNote: (state, { payload }) => {
      const { type, id } = payload;

      const setRead = (notes) => {
        state[notes] = state[notes].map((note) =>
          note.id === id ? { ...note, isRead: !note.isRead } : note
        );
      };

      if (type === "archive") {
        setRead("archiveNotes");
      } else if (type === "trash") {
        setRead("trashNotes");
      } else {
        setRead("mainNotes");
      }
    },
    removeTags: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) => ({
        ...note,
        tags: note.tags.filter(({ tag }) => tag !== payload.tag),
      }));
    },
  },
});

export const {
  setMainNotes,
  setArchiveNotes,
  setTrashNotes,
  unarchiveNote,
  restoreNote,
  deleteNote,
  setPinnedNotes,
  setEditNote,
  readNote,
  removeTags,
} = notesListSlice.actions;

export default notesListSlice.reducer;
