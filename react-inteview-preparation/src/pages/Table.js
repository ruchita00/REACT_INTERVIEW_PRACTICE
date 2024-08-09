import React, { useState } from "react";
import { initialData } from "../constants";

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(initialData);
  const [rowPerPage, setRowPerPage] = useState(5);

  const startIndex = (currentPage - 1) * rowPerPage;
  const selectedData = data.slice(startIndex, startIndex + rowPerPage);
  const totalPage = Math.ceil(data.length / rowPerPage);

  const handleRowPerPage = (e) => {
    setRowPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((current) => current - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((current) => current + 1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
    if (!term) {
      setData(initialData);
    } else {
      const filteredData = data.filter(
        (item) =>
          item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.state.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredData);
    }
  };
  const handleSort = (key) => {
    let direction;
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asending"
    ) {
      direction = "desending";
    }
    const sortData = data.sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asending" ? 1 : -1;
      }
      if (a[key] > b[key]) {
        return direction === "asending" ? -1 : 1;
      }
      return 0;
    });
    setSortConfig(sortData);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        name="search"
        placeholder="type something here"
        value={searchTerm}
      />
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("firstName")}>firstName</th>
              <th onClick={() => handleSort("lastName")}>lastName</th>{" "}
              <th onClick={() => handleSort("address")}>address</th>{" "}
              <th onClick={() => handleSort("city")}>city</th>{" "}
              <th onClick={() => handleSort("state")}>state</th>{" "}
            </tr>
          </thead>
          <tbody>
            {selectedData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td> <td>{item.address}</td>{" "}
                  <td>{item.city}</td> <td>{item.state}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            prev
          </button>
          <span>
            {currentPage} of{totalPage}
            <select onChange={handleRowPerPage} value={rowPerPage}>
              {[5, 10, 15, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPage}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
