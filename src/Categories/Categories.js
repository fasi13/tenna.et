import React from "react";
import data from "./../Data/data";

export default function Categories() {
  const categoryList = new Set();
  categoryList.add();
  for (var i = 0; i < data.length; i++) {
    // if (
    //   data[i].category !== undefined ||
    //   data[i].category !== null ||
    //   data[i].category.length > 0 ||
    //   data[i] !== undefined ||
    //   data[i] !== null ||
    //   data[i].length > 0
    // )

    categoryList.add(data[i].category ?? null);
    if (categoryList !== undefined) console.log(categoryList);
  }

  console.log(categoryList);
  // const cat
  return (
    <div className="grid grid-cols-2">
      {data.map((i) => {
        return <div className="bg-red-200 h-32">{data[i].category}</div>;
      })}
    </div>
  );
}
