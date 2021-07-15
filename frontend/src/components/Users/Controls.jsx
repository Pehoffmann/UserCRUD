import React from "react";
import Order from "./Order";
import Pagination from "./Pagination";

function Controls({ data }) {
  return (
    <>
      <section id="searchUserSection" className="search-user">
        <Order />
      </section>
      <section id="listPaginationSection">
        {data.pages && data.pages > 0 ? <Pagination {...data} /> : null}
      </section>
    </>
  );
}

export default Controls;
