import React from "react";
import data from "./../Data/data";
import { Link } from "react-router-dom";
export default function Categories() {
  let categoryList = [];
  let uniqueCategory = [];
  for (var i = 0; i < data.length; i++) {
    // if (
    //   data[i].category !== undefined ||
    //   data[i].category !== null ||
    //   data[i].category.length > 0 ||
    //   data[i] !== undefined ||
    //   data[i] !== null ||
    //   data[i].length > 0
    // )
    categoryList.push(data[i].category);
    // if (categoryList !== undefined) console.log(categoryList);
  }
  uniqueCategory = [...new Set(categoryList)];
  console.log(uniqueCategory);
  //   console.log(categoryList);
  // const cat
  return (
    <div className="flex flex-wrap grid grid-cols-2 gap-3 ">
      {uniqueCategory.map((i, idx) => {
        return (
          <Link key={idx} to={`/CategoriesDetail?id=${idx}`}>
            <div className="bg-red-200 h-32 text-center">{i}</div>
          </Link>
        );
      })}
    </div>
  );
}
