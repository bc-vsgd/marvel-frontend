// Packages
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
// Style: common with Comic.jsx => in App.css (.results-div)

const Character = ({ data }) => {
  // data: object with keys: comics, description, name, thumbnail, _id
  const { thumbnail, name, description, _id } = data;
  return (
    <div>
      <Link className="first-div" to={`/marvel/comics/${_id}`}>
        <img
          src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
          alt="Character picture"
        />
        <h2>{name}</h2>
        {description ? <p>{description}</p> : <p>No description</p>}
      </Link>
      <div className="button-div favorites-invisible">
        <button
          onClick={() => {
            Cookies.set(_id, JSON.stringify(data));
          }}
        >
          Ajouter aux favoris
        </button>
      </div>
    </div>
  );
};

export default Character;
