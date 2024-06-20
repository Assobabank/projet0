// List.js
import React from "react";
import Card from "./Card";

const List = ({ data }) => {
  return (
    <div className="col-sm">
      <div className="row">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
