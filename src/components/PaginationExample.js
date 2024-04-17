import React, { useState } from "react";

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page
  const totalItems = 100; // Total number of items

  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Handle go to page
  const goToPage = (page) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  };

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  // Generate dummy data for demonstration
  const data = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`
  );

  // Filter the data based on the current page
  const currentPageData = data.slice(startIndex, endIndex + 1);

  return (
    <div>
      <h1>Pagination Example</h1>
      <ul>
        {currentPageData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
      <div>
        Page {currentPage} of {totalPages}
      </div>
      <input
        type="number"
        min="1"
        max={totalPages}
        value={currentPage}
        onChange={(e) => goToPage(parseInt(e.target.value))}
      />
    </div>
  );
};

export default PaginationExample;
