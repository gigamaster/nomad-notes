//styles
import { StyledNav, Container } from "./Navbar.styles";
import { ButtonFill } from "../../styles/styles";

//icon
import { GoNote, GoPlus } from "react-icons/go";

//redux
import { useDispatch } from "react-redux";
import { toggleCreateNoteModal, toggleMenu } from "../../features";

import { useLocation } from "react-router-dom";

import { getStandardName } from "../../utils";

const Navbar = () => {
  const dispatch = useDispatch();

  //get path
  const location = useLocation();
  const { pathname, state } = location;

  //hide sidebar in path 404
  if (pathname === "/" || pathname === "/404") {
    return;
  }

  return (
    <StyledNav>
      <div className="nav__menu">
        <GoNote onClick={() => dispatch(toggleMenu(true))} />
      </div>

      <Container>
        <div className="nav__page-title">{getStandardName(state)}</div>

        {state !== "Trash" && state !== "Archive" && (
          <ButtonFill
            onClick={() => dispatch(toggleCreateNoteModal(true))}
            className="nav__btn">
            <GoPlus /> <span>Create Note</span>
          </ButtonFill>
        )}
      </Container>
    </StyledNav>
  );
};

export default Navbar;
