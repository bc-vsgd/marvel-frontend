// Packages
import Cookies from "js-cookie";
// Style: common with Character.jsx => in App.css (.results-div)

const Comic = ({ data }) => {
  // data: object with keys: thumbnail, _id, title, description
  const { thumbnail, _id, title, description } = data;
  return (
    <div>
      <div className="first-div">
        <img
          src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
          alt="Comic picture"
        />
        <h2>{title}</h2>
        {description ? <p>{description}</p> : <p>No description</p>}
      </div>
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

export default Comic;
