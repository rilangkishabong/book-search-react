import React from "react";

export const Table = (props) => {
  const { headers, children } = props;

  return (
    <div className="table-responsive bg-white">
      <table className="table table-bordered table-hover mb-0">
        <thead>
          <tr>
            {headers.map((heading, index) => (
              <th
                className="small bg-primary-subtle text-primary-emphasis text-nowrap"
                key={index}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export const Tr = (props) => {
  const { children, ...others } = props;

  return <tr {...others}>{children}</tr>;
};

export const Td = (props) => {
  const { children, ...others } = props;

  return <td {...others}>{children}</td>;
};

export const PageInfo = (props) => {
  const { response, pageSize, setPageSize, setPageNumber } = props;

  // Constants
  const startElement =
    response?.data?.data?.pageable.pageNumber * response?.data?.data.size + 1;
  const endElement =
    response?.data?.data?.pageable.pageNumber * response?.data?.data.size +
    response?.data?.data?.size;
  const totalElements = response?.data?.data?.totalElements;

  const handlePageSize = (e) => {
    setPageNumber(0);
    setPageSize(e.target.value);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      {/* Items */}
      <small className="small text-secondary">
        {startElement} -{" "}
        {endElement > totalElements ? totalElements : endElement} out of{" "}
        {totalElements} items
      </small>

      {/* Page Size */}
      <div className="d-flex align-items-center gap-2">
        <small className="small text-secondary">Items per page</small>
        <select
          className="form-select form-select-sm w-auto rounded-3"
          onChange={handlePageSize}
          defaultValue={pageSize}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
    </div>
  );
};

export const Pagination = (props) => {
  const { response, pageNumber, setPageNumber } = props;

  // Constants
  const totalPages = response?.data?.data?.totalPages;

  // Handlers
  const nextPage = () => {
    if (pageNumber + 1 === totalPages) return;
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber === 0) return;
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="mt-3">
      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <small className="text-secondary">
          {pageNumber + 1} of {totalPages} {totalPages === 1 ? "page" : "pages"}
        </small>

        <div
          className="btn-group"
          role="pagination"
          aria-label="Pagination buttons"
        >
          <button
            className="btn btn-cs-secondary"
            disabled={pageNumber === 0}
            onClick={() => setPageNumber(0)}
          >
            First
          </button>
          <button
            className="btn btn-cs-secondary d-flex align-items-center"
            onClick={() => prevPage()}
            disabled={pageNumber === 0}
          >
            <span className="material-icons-outlined">chevron_left</span>
          </button>
          <button
            className="btn btn-cs-secondary d-flex align-items-center"
            onClick={() => nextPage()}
            disabled={pageNumber + 1 === totalPages}
          >
            <span className="material-icons-outlined">chevron_right</span>
          </button>
          <button
            className="btn btn-cs-secondary"
            disabled={pageNumber + 1 === totalPages}
            onClick={() => setPageNumber(totalPages - 1)}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export const elementCounter = (index, response) => {
  return (
    index + response.data.data.pageable.pageNumber * response.data.data.size + 1
  );
};
