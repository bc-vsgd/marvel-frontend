import logo_react from "../../img/logo_react.png";
import logo_reacteur from "../../img/logo_reacteur.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="container">
      <div>
        <span>Made with</span>
        <a
          href="https://react.dev/blog/2023/03/16/introducing-react-dev"
          target="_blank"
        >
          <img src={logo_react} alt="Logo React" />
          <span>React</span>
        </a>
        <span>at</span>
        <a href="https://www.lereacteur.io/" target="_blank">
          <img src={logo_reacteur} alt="Logo Reacteur" />
          <span>Le Reacteur</span>
        </a>
        <span>by</span>
        <a href="https://github.com/bc-vsgd" target="_blank">
          <span>Benoît Charles</span>
          <FontAwesomeIcon icon="fa-brands fa-github" className="fa-brands" />
        </a>
        <a
          href="https://www.linkedin.com/in/beno%C3%AEt-charles-b641672a6/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            className="fa-brands fa-linkedin"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
