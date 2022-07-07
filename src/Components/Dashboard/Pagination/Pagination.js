import React from "react";

const Pagination = () => {
  return (
    <>
      {/* <div className="btn-group">
        <button className="btn btn-sm">1</button>
        <button className="btn btn-sm btn-active">2</button>
        <button className="btn btn-sm">3</button>
        <button className="btn btn-sm">4</button>
      </div> */}
      <div className="btn-group">
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
        <button className="btn btn-disabled">...</button>
        <button className="btn">99</button>
        <button className="btn">100</button>
      </div>
    </>
  );
};

export default Pagination;
