import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({ versePerPage, totalVerse, paginate }) => {
  const pageNumbers = [];
  const active = "";

  for (let i = 1; i <= Math.ceil(totalVerse / versePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination flex-wrap">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item  ${active}`}
            aria-current="page"
          >
            <Link
              onClick={() => paginate(number)}
              className="page-link active"
            />
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};
