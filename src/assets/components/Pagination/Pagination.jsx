const Pagination = ({ page, setPage, count }) => {
  // Number of pages
  const pages = Math.ceil(count / 100);
  return (
    <div className="pagination-div">
      <div>
        {page > 1 && (
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            -
          </button>
        )}
      </div>
      <div>
        <label>Page</label>{" "}
        <input
          type="number"
          value={page}
          onChange={(event) => {
            if (event.target.value) {
              setPage(Number(event.target.value));
            }
          }}
        />
      </div>
      <div>
        {page < pages && (
          <button
            onClick={() => {
              if (page < pages) {
                setPage(page + 1);
              }
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
