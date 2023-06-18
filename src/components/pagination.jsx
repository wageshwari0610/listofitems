import _ from "lodash";

export default function Pagination(props) {
  const { pageSize, count, currentPage, handlePageChange } = props;
  const pageCount = count / pageSize;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination pagination-lg">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a class="page-link" onClick={() => handlePageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
