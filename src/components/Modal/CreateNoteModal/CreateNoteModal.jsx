import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { v4 } from "uuid";
import dayjs from "dayjs";

//styles
import { FixedContainer, DeleteBox } from "../Modal.styles";
import {
  Box,
  TopBox,
  StyledInput,
  AddedTagsBox,
  OptionsBox,
} from "./CreateNoteModal.styles";
import { ButtonFill, ButtonOutline } from "../../../styles/styles";

//icons
import { GoPlus, GoTag, GoX } from "react-icons/go";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTagsModal,
  toggleCreateNoteModal,
  setMainNotes,
  setEditNote,
} from "../../../features";

//components
import TextEditor from "../../TextEditor/TextEditor";
import TagsModal from "../TagsModal/TagsModal";

const CreateNoteModal = () => {
  const dispatch = useDispatch();

  const { viewAddTagsModal } = useSelector((state) => state.modal);
  const { tagsList } = useSelector((state) => state.tags);
  const { editNote } = useSelector((state) => state.notesList);

  const [noteTitle, setNoteTitle] = useState(editNote?.title || "");
  const [value, setValue] = useState(editNote?.content || "");
  const [addedTags, setAddedTags] = useState(editNote?.tags || []);
  const [noteColor, setNoteColor] = useState(editNote?.color || "");
  const [priority, setPriority] = useState(editNote?.priority || "low");

  // delete tag from the main tags list
  useEffect(() => {
    setAddedTags((prev) =>
      prev.filter(({ tag }) => tagsList.find((obj) => obj.tag === tag))
    );
  }, [tagsList]);

  // add tags to note
  const tagsHandler = (tag, type) => {
    const newTag = tag.toLowerCase();

    if (type === "add") {
      setAddedTags((prev) => [...prev, { tag: newTag, id: v4() }]);
    } else {
      setAddedTags(addedTags.filter(({ tag }) => tag !== newTag));
    }
  };

  // create note
  const createNoteHandler = () => {
    if (!noteTitle) {
      toast.error("Note title is required!");
      return;
    } else if (value === "<p><br></p>") {
      toast.error("Note content is required!");
      return;
    } else if (editNote) {
      toast.success("Note has been successfully edited.");
    }

    const date = dayjs().format("DD/MM/YY h:mm A");

    let note = {
      title: noteTitle,
      content: value,
      tags: addedTags,
      color: noteColor,
      priority,
      editedTime: new Date().getTime(),
    };

    if (editNote) {
      note = { ...editNote, ...note };
    } else {
      note = {
        ...note,
        date,
        createdTime: new Date().getTime(),
        editedTime: null,
        isPinned: false,
        isRead: false,
        id: v4(),
      };
    }

    dispatch(setMainNotes(note));
    dispatch(toggleCreateNoteModal(false));
    dispatch(setEditNote(null));
  };

  return (
    <FixedContainer>
      {viewAddTagsModal && (
        <TagsModal type="add" addedTags={addedTags} handleTags={tagsHandler} />
      )}

      <Box>
        <TopBox>
          <div className="createNote__title">Create Note</div>
          <DeleteBox
            className="createNote__close-btn"
            data-tip="Close"
            onClick={() => dispatch(toggleCreateNoteModal(false))}>
            <GoPlus />
          </DeleteBox>
        </TopBox>

        <StyledInput
          type="text"
          value={noteTitle}
          name="title"
          placeholder="Title ..."
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <div>
          <TextEditor value={value} setValue={setValue} color={noteColor} />
        </div>

        <AddedTagsBox>
          {addedTags.map(({ tag, id }) => (
            <div key={id}>
              <span className="createNote__tag">{tag}</span>
              <span
                onClick={() => tagsHandler(tag, "remove")}
                data-tip="Remove"
                className="createNote__tag-remove">
                <GoX />
              </span>
            </div>
          ))}
        </AddedTagsBox>

        <OptionsBox>
          <ButtonOutline
            onClick={() =>
              dispatch(toggleTagsModal({ type: "add", view: true }))
            }>
            <GoTag /> <span>Add Tag</span>
          </ButtonOutline>
          <div>
            <label htmlFor="color">Note Color : </label>
            <select
              value={noteColor}
              id="color"
              onChange={(e) => setNoteColor(e.target.value)}>
              <option value="#2c353a">Default</option>
              <option value="#13407c">Blue</option>
              <option value="#1f4d19">Green</option>
              <option value="#302060">Indigo</option>
              <option value="#73370d">Orange</option>
              <option value="#791515">Red</option>
            </select>
          </div>

          <div>
            <label htmlFor="priority">Priority : </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              id="priority">
              <option value="none">None</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </OptionsBox>

        <div className="createNote__create-btn">
          <ButtonFill onClick={createNoteHandler}>
            {editNote ? (
              <span>Save</span>
            ) : (
              <>
                <GoPlus /> <span>Create</span>
              </>
            )}
          </ButtonFill>
        </div>
      </Box>
    </FixedContainer>
  );
};

export default CreateNoteModal;
