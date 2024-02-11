// Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ setIsLoading, page, setPage, count, type }) => {
  // Number of pages
  const pages = Math.ceil(count / 100);
  return (
    <div className="pagination-div">
      <div className="button-div">
        {page > 1 && (
          <button
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-left"
              className="fa-solid"
            />
          </button>
        )}
      </div>
      <div>
        <label>Page</label>{" "}
        <input
          type="text"
          value={page}
          // To avoid console error message
          onChange={() => {}}
        />
      </div>
      <div className="button-div">
        {page < pages && (
          <button
            onClick={() => {
              if (page < pages) {
                setPage(page + 1);
              }
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-right"
              className="fa-solid"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
