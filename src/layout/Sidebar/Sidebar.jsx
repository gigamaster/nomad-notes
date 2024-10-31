//styles
import {
  Container,
  MainBox,
  StyledLogo,
  ItemsBox,
  ItemTools,
} from "./Sidebar.styles";

//icons
import {
  GoArchive,
  GoBookmark,
  GoDatabase,
  GoNote,
  GoPencil,
  GoTag,
  GoTasklist,
  GoTrash,
} from "react-icons/go";

//redux
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleTagsModal } from "../../features";

//other
import { v4 } from "uuid";
import { NavLink, useLocation } from "react-router-dom";
import useOutsideClick from "../../custom-hooks/outsideClickHook";
import { getStandardName } from "../../utils";

//sidebar items
const items = [
  { icon: <GoArchive />, title: "Archive", id: v4() },
  { icon: <GoTrash />, title: "Trash", id: v4() },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.menu);
  const { tagsList } = useSelector((state) => state.tags);

  //get path
  const location = useLocation();
  const { pathname } = location;

  //custom hook to close menu
  const nodeRef = useOutsideClick(() => dispatch(toggleMenu(false)));

  //hide sidebar in path 404
  if (pathname === "/" || pathname === "/404") {
    return;
  }

  return (
    <Container openMenu={isOpen && "open"}>
      <MainBox openMenu={isOpen && "open"} ref={nodeRef}>
        <StyledLogo>
          <i className="icon-codemo" alt="Codemo"></i>
          <span>Nomad Notes</span>
        </StyledLogo>

        <ItemsBox>
          {/* note item */}
          <li onClick={() => dispatch(toggleMenu(false))}>
            <NavLink
              to={`/notes`}
              state={`notes`}
              className={({ isActive }) =>
                isActive ? "active-item" : "inactive-item"
              }>
              <span>
                <GoNote />
              </span>
              <span>Notes</span>
            </NavLink>
          </li>

          {/*tags list */}
          {tagsList?.map(({ tag, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/tag/${tag}`}
                state={`${tag}`}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }>
                <span>
                  <GoTag />
                </span>
                <span>{getStandardName(tag)}</span>
              </NavLink>
            </li>
          ))}

          {/* edit tag */}
          <li
            className="sidebar__edit-item"
            onClick={() =>
              dispatch(toggleTagsModal({ type: "edit", view: true }))
            }>
            <span>
              <GoPencil />
            </span>
            <span>Edit Tags</span>
          </li>

          {/* other items */}
          {items.map(({ icon, title, id }) => (
            <li key={id} onClick={() => dispatch(toggleMenu(false))}>
              <NavLink
                to={`/${title.toLowerCase()}`}
                state={`${title}`}
                className={({ isActive }) =>
                  isActive ? "active-item" : "inactive-item"
                }>
                <span>{icon}</span>
                <span>{title}</span>
              </NavLink>
            </li>
          ))}
        </ItemsBox>

        <ItemTools>
          <a
            href="https://gigamaster.github.io/nomad-bookmarks/"
            data-tip="Codemo Nomad Bookmarks">
            <GoBookmark />
            <span>Bookmarks</span>
          </a>
          <a
            href="https://gigamaster.github.io/nomad-localstorage/"
            data-tip="Codemo Local Storage">
            <GoDatabase />
            <span>Database</span>
          </a>
          <a
            href="https://gigamaster.github.io/nomad-tasks/"
            data-tip="Codemo Nomad Tasks">
            <GoTasklist />
            <span>Tasks</span>
          </a>
        </ItemTools>
      </MainBox>
    </Container>
  );
};

export default Sidebar;
