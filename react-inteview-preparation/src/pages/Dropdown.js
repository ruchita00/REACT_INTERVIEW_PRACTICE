import React, { useState } from "react";
const initialData = [
  {
    title: "Mr.",
    firstName: "John",
    lastName: "Doe",
    product: "Laptop",
    range: "A",
    quantity: 5,
  },
  {
    title: "Ms.",
    firstName: "Jane",
    lastName: "Smith",
    product: "Phone",
    range: "B",
    quantity: 10,
  },
  {
    title: "Ms.",
    firstName: "ruchi",
    lastName: "saglgile",
    product: "Phone",
    range: "c",
    quantity: 120,
  },
  {
    title: "Ms.",
    firstName: "santosh",
    lastName: "sah",
    product: "Phone",
    range: "B",
    quantity: 90,
  },
  // Add more data as needed
];

const Dropdown = () => {
  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState({
    title: "",
    firstName: "",
    lastName: "",
    product: "",
    quantity: "",
    range: "",
  });
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredData = data.filter((item) => {
    return (
      (filters.title === "" || item.title === filters.title) &&
      (filters.firstName === "" ||
        item.firstName.includes(filters.firstName)) &&
      (filters.lastName === "" || item.lastName.includes(filters.lastName)) &&
      (filters.product === "" || item.product === filters.product) &&
      (filters.range === "" || item.range === filters.range) &&
      (filters.quantity === "" || item.quantity.toString() === filters.quantity)
    );
  });
  return (
    <div>
      <div>
        <label>title:</label>
        <select
          value={filters.title}
          name="title"
          onChange={handleFilterChange}
        >
          <option value="">all</option>
          {[...new Set(data.map((item) => item.title))].map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
        <label>firstName</label>
        <input
          type="text"
          name="firstName"
          onChange={handleFilterChange}
          value={filters.firstName}
        />
        <label>lastName</label>
        <input
          type="text"
          name="lastName"
          onChange={handleFilterChange}
          value={filters.lastName}
        />
        <label>range:</label>
        <select
          value={filters.range}
          name="range"
          onChange={handleFilterChange}
        >
          <option value="">all</option>
          {[...new Set(data.map((item) => item.range))].map((range, index) => (
            <option key={index} value={range}>
              {range}
            </option>
          ))}
        </select>
        <label>product:</label>
        <select
          value={filters.product}
          name="product"
          onChange={handleFilterChange}
        >
          <option value="">all</option>
          {[...new Set(data.map((item) => item.product))].map(
            (product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            )
          )}
        </select>
        <label>quantity:</label>
        <select
          value={filters.quantity}
          name="quantity"
          onChange={handleFilterChange}
        >
          <option value="">all</option>
          {[...new Set(data.map((item) => item.quantity))].map(
            (quantity, index) => (
              <option key={index} value={quantity}>
                {quantity}
              </option>
            )
          )}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>product</th>
            <th>quantity</th>
            <th>range</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>{item.range}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dropdown;
