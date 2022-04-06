import React from "react";
// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Products() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable title="Bikes Table" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" title="Accessories Table" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable title="Clothing Table" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" title="Components Table" />
        </div>
      </div>
    </>
  );
}
Products.layout = Admin;
