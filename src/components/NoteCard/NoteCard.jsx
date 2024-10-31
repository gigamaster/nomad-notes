import parse from "html-react-parser";

//icons
import { GoPin } from "react-icons/go";

//styles
import {
  Card,
  TopBox,
  ContentBox,
  TagsBox,
  FooterBox,
} from "./NoteCard.styles";
import { NotesIconBox } from "../../styles/styles";

//redux
import { useDispatch } from "react-redux";
import { setPinnedNotes, readNote } from "../../features";
import { getReleventBtns } from "../../utils";
import ReadNoteModal from "../Modal/ReadNoteModal/ReadNoteModal";

const NoteCard = ({ note, type }) => {
  const { title, content, tags, color, priority, date, isPinned, isRead, id } =
    note;

  const dispatch = useDispatch();

  // const parsedContent
  // content.length = ellipsis
  const func = () => {
    const imgContent = content.includes("img");

    if (imgContent) {
      return content;
    } else {
      return content.length > 120 ? content.slice(0, 120) + "..." : content;
    }
  };

  return (
    <>
      {isRead && <ReadNoteModal note={note} type={type} />}
      <Card style={{ backgroundColor: color }}>
        <TopBox>
          <div
            className="noteCard__title"
            onClick={() => dispatch(readNote({ type, id }))}>
            {title.length > 15 ? title.slice(0, 15) + "..." : title}
          </div>
          <div className="noteCard__top-options">
            <span className="noteCard__priority">{priority}</span>

            {type !== "archive" && type !== "trash" && (
              <NotesIconBox
                className="noteCard__pin"
                onClick={() => dispatch(setPinnedNotes({ id }))}>
                <GoPin style={{ color: isPinned && "var(--color-pin)" }} />
              </NotesIconBox>
            )}
          </div>
        </TopBox>
        <ContentBox onClick={() => dispatch(readNote({ type, id }))}>
          {parse(func())}
        </ContentBox>

        <TagsBox>
          {tags?.map(({ tag, id }) => (
            <span key={id}>{tag}</span>
          ))}
        </TagsBox>

        <FooterBox>
          <div className="noteCard__date">{date}</div>
          <div>{getReleventBtns(type, note, dispatch)}</div>
        </FooterBox>
      </Card>
    </>
  );
};

export default NoteCard;
