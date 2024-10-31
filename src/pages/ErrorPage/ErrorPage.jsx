//styles
import { Container } from "./ErrorPage.styles";
import { ButtonFill } from "../../styles/styles";

//img
import images from "../../assets";

//router
import { useNavigate } from "react-router-dom";

const ErrorsPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="error__img">
        <img src={images.error404} alt="Page Not Found" />
      </div>
      <div className="error__text">
        <h1>On a wild goose chase?</h1>
        <div>
          "For everything you have missed,
          <br /> you have gained something else,
          <br />
          and for everything you gain,
          <br />
          you lose something else."
          <br />— Ralph Waldo Emerson
        </div>
        <h2>Whatever that means</h2>
        <ButtonFill onClick={() => navigate("/")}>
          <span>Go to home page</span>
        </ButtonFill>
      </div>
    </Container>
  );
};

export default ErrorsPage;
