//styles
import { Container, Box, LeftBox, RightBox } from "./Home.styles";
import { ButtonFill } from "../../styles/styles";

import images from "../../assets";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="home__header">
        <div className="home__logo">
          {/* <img src={images.colorLogo} alt="" /> */}
          <i className="icon-codemo" alt="Codemo"></i>
          <span>Codemo Digital Nomad Notes</span>
        </div>
      </div>
      <Box>
        <LeftBox>
          <div className="home__main-heading">
            Turn things you need to do into things you have done!
          </div>
          <p className="home__sub-heading">
            Web-based note-taking app for easy tracking of ideas, studies,
            projects and tasks, images and quotes, all stored locally.
          </p>
          <ButtonFill
            className="home__btn"
            onClick={() => navigate("/notes", { state: "notes" })}>
            <span>Get Started</span>
          </ButtonFill>
        </LeftBox>
        <RightBox>
          <img src={images.nomadNotes} alt="Digital Nomad Notes" />
        </RightBox>
      </Box>
    </Container>
  );
};

export default Home;
