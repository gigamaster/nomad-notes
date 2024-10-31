import { useState } from "react";

//styles
import { Box, StyledInput, TagsBox, AddBox } from "./TagsModal.styles";
import { FixedContainer, DeleteBox } from "../Modal.styles";

//icons
import { GoCheck, GoX, GoPlus, GoDash } from "react-icons/go";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  addTags,
  deleteTags,
  removeTags,
  toggleTagsModal,
} from "../../../features";

//other
import { v4 } from "uuid";
import { getStandardName } from "../../../utils";

const TagsModal = ({ type, addedTags, handleTags }) => {
  const dispatch = useDispatch();
  const { tagsList } = useSelector((state) => state.tags);

  const [inputText, setInputText] = useState("");

  //add tags
  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputText) {
      return;
    }

    dispatch(addTags({ tag: inputText.toLowerCase(), id: v4() }));
    setInputText("");
  };

  // delete tag from tags list
  // and from stored notes
  const deleteTagsHandler = (tag, id) => {
    dispatch(deleteTags(id));
    dispatch(removeTags({ tag }));
  };

  return (
    <FixedContainer>
      <Box>
        <div className="editTags__header">
          <div className="editTags__title">
            {type === "add" ? "Add" : "Edit"} Tags
          </div>
          <DeleteBox
            className="editTags__close"
            data-tip="Close"
            onClick={() => dispatch(toggleTagsModal({ type, view: false }))}>
            <GoX />
          </DeleteBox>
        </div>

        <form onSubmit={submitHandler}>
          <StyledInput
            type="text"
            value={inputText}
            placeholder="New Tag..."
            onChange={(e) => setInputText(e.target.value)}
          />
          <AddBox onClick={submitHandler} check={inputText}>
            <GoCheck />
          </AddBox>
        </form>
        <TagsBox>
          <ul>
            {tagsList.map(({ tag, id }) => (
              <li key={id}>
                <div className="editTags__tag">{getStandardName(tag)}</div>
                {type === "edit" ? (
                  <DeleteBox
                    data-tip="Delete"
                    onClick={() => deleteTagsHandler(tag, id)}>
                    <GoX />
                  </DeleteBox>
                ) : (
                  <DeleteBox>
                    {addedTags?.find(
                      (addedTag) => addedTag.tag === tag.toLowerCase()
                    ) ? (
                      <GoDash
                        data-tip="Remove Tag"
                        onClick={() => handleTags(tag, "remove")}
                      />
                    ) : (
                      <GoPlus
                        data-tip="Add Tag"
                        onClick={() => handleTags(tag, "add")}
                      />
                    )}
                  </DeleteBox>
                )}
              </li>
            ))}
          </ul>
        </TagsBox>
      </Box>
    </FixedContainer>
  );
};

export default TagsModal;
