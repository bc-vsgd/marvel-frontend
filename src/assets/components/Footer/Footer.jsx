import logo_react from "../../img/logo_react.png";
import logo_reacteur from "../../img/logo_reacteur.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <img src={logo_react} alt="Logo React" />
      <img src={logo_reacteur} alt="Logo Reacteur" />
      <FontAwesomeIcon icon="fa-brands fa-github" />
      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
    </footer>
  );
};

export default Footer;
