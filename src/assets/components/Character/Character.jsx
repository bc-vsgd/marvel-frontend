import { Link } from "react-router-dom";

const Character = ({ data }) => {
  // data: object with keys: comics, description, name, thumbnail, _id
  const { thumbnail, name, description, _id } = data;
  return (
    <Link to={`/marvel/comics/${_id}`}>
      <div>
        <img
          src={`${thumbnail.path}/portrait_small.${thumbnail.extension}`}
          alt="Character picture"
        />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Character;
