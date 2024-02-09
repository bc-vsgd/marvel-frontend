// Packages
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// Components
import Header from "../Header/Header";

const Character = ({ data }) => {
  // data: object with keys: comics, description, name, thumbnail, _id
  const { thumbnail, name, description, _id } = data;
  return (
    <div className="character-div">
      <Link to={`/marvel/comics/${_id}`}>
        <img
          src={`${thumbnail.path}/portrait_small.${thumbnail.extension}`}
          alt="Character picture"
        />
        <h2>{name}</h2>
        <p>{description}</p>
      </Link>
      <p
        onClick={() => {
          Cookies.set(_id, "character");
        }}
      >
        Ajouter aux favoris
      </p>
    </div>
  );
};

export default Character;
