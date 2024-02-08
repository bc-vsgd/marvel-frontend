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
    </div>
  );
};

export default Comic;
