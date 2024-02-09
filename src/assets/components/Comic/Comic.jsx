import Cookies from "js-cookie";

const Comic = ({ data }) => {
  // data: object with keys: thumbnail, _id, title, description
  const { thumbnail, _id, title, description } = data;
  return (
    <div>
      <img
        src={`${thumbnail.path}/portrait_small.${thumbnail.extension}`}
        alt="Comic picture"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <p
        onClick={() => {
          Cookies.set(_id, "comic");
        }}
      >
        Ajouter aux favoris
      </p>
    </div>
  );
};

export default Comic;
