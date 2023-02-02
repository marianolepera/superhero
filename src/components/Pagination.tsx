import React from "react";

export default function Pagination({
  herosPerPage,
  totalHeros,
  paginate,
  currentPage,
}:any) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHeros / herosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='py-2'>
      <nav >
        <ul >
          <li>
            {pageNumbers.map((number) => (
              <a
                onClick={() => {
                  paginate(number);
                }}
                href='#'
                className={
                  currentPage === number
                    ? "bg-blue border-blue-300 text-blue-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}