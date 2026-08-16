import "./Pagination.css";

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination__nav"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        ← Previous
      </button>

      <div className="pagination__pages">
        {pages.map((p) => (
          <button
            key={p}
            className={p === page ? "active" : ""}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        className="pagination__nav"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next →
      </button>
    </nav>
  );
}

export default Pagination;
