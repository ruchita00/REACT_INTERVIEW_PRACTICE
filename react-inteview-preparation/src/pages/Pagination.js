import React, { useEffect, useState } from "react";
import "../styles/Pagination.css";
const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=100`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log("error while fetching data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectedPage = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage !== page &&
      selectedPage <= products.length / 10
    ) {
      setPage(selectedPage);
    }
  };
  return (
    <div>
      {products?.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod, index) => {
            return (
              <div key={index} className="products_item">
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </div>
            );
          })}
        </div>
      )}
      {products?.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => handleSelectedPage(page - 1)}
            className={`${page > 1 ? "" : "pagination_selected"}`}
          >
            ◀
          </span>
          {[...Array(products.length / 10)].map((_, i) => (
            <span
              onClick={() => handleSelectedPage(i + 1)}
              className={`${page === i + 1 ? "pagination_selected" : ""}`}
            ></span>
          ))}
          <span
            onClick={() => handleSelectedPage(page + 1)}
            className={`${
              page < products.length / 10 ? "" : "pagination_disabled"
            }`}
          >
            ▶
          </span>
        </div>
      )}
      {loading && <p>...loading</p>}
    </div>
  );
};

export default Pagination;
