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
    <div className="h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-3 lg:px-6">
          <h1 className="text-3xl font-bold text-gray-900">ምድቦች</h1>
        </div>
      </header>
      <div className="flex flex-wrap grid grid-cols-2 gap-3 ">
        {uniqueCategory.map((i, idx) => {
          return (
            <Link key={idx} to={`/CategoriesDetail?id=${idx}`}>
              <div className="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
                <img
                  className="rounded-lg rounded-b-none"
                  src={i.imageURL}
                  alt="thumbnail"
                  loading="lazy"
                />
                <div className="py-2 px-4 ">
                  <h1 className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer">
                    {i}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
