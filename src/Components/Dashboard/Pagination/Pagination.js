import React from "react";

const Pagination = () => {
  return (
    <>
      {/* <div class="btn-group">
        <button class="btn btn-sm">1</button>
        <button class="btn btn-sm btn-active">2</button>
        <button class="btn btn-sm">3</button>
        <button class="btn btn-sm">4</button>
      </div> */}
      <div class="btn-group">
        <button class="btn">1</button>
        <button class="btn">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
        <button class="btn btn-disabled">...</button>
        <button class="btn">99</button>
        <button class="btn">100</button>
      </div>
    </>
  );
};

export default Pagination;
