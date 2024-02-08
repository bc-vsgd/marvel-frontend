const Pagination = ({ page, setPage, count }) => {
  return (
    <div>
      <button
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        -
      </button>
      <span>Page {page}</span>
      <button
        onClick={() => {
          const pages = Math.ceil(count / 100);
          //   console.log("button +, pages >>>> ", pages);
          //   console.log("button +, count >>>> ", count);
          if (page < pages) {
            setPage(page + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default Pagination;
