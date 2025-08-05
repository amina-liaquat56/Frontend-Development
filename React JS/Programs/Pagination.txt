import React, { useState } from "react";
import productsArr from "./Products.json";
import ReactPaginate from "react-paginate";
import "./ProductsPagination.css";

export default function ProductsPagination() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const filteredProducts = productsArr.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productsArr.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productsArr.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <h1 className="text-center">Products With Pagination</h1>

      <div className="container">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-sm-3" key={product.id}>
              <div className="card text-center">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.category}</h5>
                  <p className="card-text">{product.title}</p>
                  <p
                    className="card-text"
                    style={{ height: "200px", overflow: "scroll" }}
                  >
                    {product.description}
                  </p>
                  <p className="card-text"> {product.price}</p>
                  <a href="#" className="btn btn-primary">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

ProductsPagination.css
=======================
.pagination {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 16px;
  gap: 5px;
}
.pagination .page-num {
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
}
.pagination .page-num:hover {
  background-color: aqua;
  color: white;
}
.pagination .active {
  background-color: aqua;
}
