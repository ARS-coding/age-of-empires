import { Container } from "react-bootstrap";
import AgeOfEmpiresImage from "../../assets/images/Age_of_Empires.webp";

import "./index.sass";

const Home = () => (
  <Container fluid className="home-container-fluid d-flex align-items-center p-0">
    <img src={AgeOfEmpiresImage} className="d-block img-fluid mx-auto" alt="age of empires logo" />
  </Container>
);

export default Home;
