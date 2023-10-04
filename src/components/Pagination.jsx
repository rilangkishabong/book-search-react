import React from "react";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <small className="small text-secondary">11 - 12 out of 12 items</small>

      <div className="btn-group" aria-label="Pagination buttons">
        <button
          className="page-btn"
          //   disabled={pageNumber === 0}
          //   onClick={() => setPageNumber(0)}
        >
          First
        </button>
        <button
          className="btn btn-cs-secondary d-flex align-items-center"
          //   onClick={() => prevPage()}
          //   disabled={pageNumber === 0}
        >
          <span className="material-icons-outlined">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
        </button>
        <button
          className="btn btn-cs-secondary d-flex align-items-center"
          //   onClick={() => nextPage()}
          //   disabled={pageNumber + 1 === totalPages}
        >
          <span className="material-icons-outlined">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
        <button
          className="page-btn"
          //   disabled={pageNumber + 1 === totalPages}
          //   onClick={() => setPageNumber(totalPages - 1)}
        >
          Last
        </button>
      </div>

      {/* Page Size */}
      <div>
        <small>Items per page</small>
        <select
          className="form-select form-select-sm w-auto rounded-3"
          //   onChange={handlePageSize}
          //   defaultValue={pageSize}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
          </div>
             <small>
          2 of 2 pages
        </small>
    </div>
  );
};

export default Pagination;
