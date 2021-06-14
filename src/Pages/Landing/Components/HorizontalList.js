import React from "react";
import { Link } from "react-router-dom";
import data from "./../../../Data/data";
export default function HorizontalList() {
  const titles = ["Mostly-Viewed", "Current", "Favorite"];

  const data2 = data.sort((a, b) => b.seenValue - a.seenValue).slice(0, 3);

  const data3 = data
    .sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted))
    .slice(0, 3);

  let data4 = [{}];
  let favList = [];
  if (localStorage.getItem("favList"))
    favList = JSON.parse(localStorage.getItem("favList")) ?? [];

  for (let index = 0, i = 0; index < data.length; index++) {
    if (favList.includes(data[index].id)) {
      data4[i] = data[index];
      i++;
    }
  }

  let allList = [];
  const assignToList = (index) => {
    if (index === 0) allList = data2;
    else if (index === 1) allList = data3;
    else if (index === 2) allList = data4;
  };
  return (
    <div className="pt-8">
      {titles?.map((i, index) => {
        assignToList(index);

        return (
          <div key={titles[index]}>
            <div className="w-full flex justify-between pr-2">
              <span className="text-2xl font-bold text-gray-900 px-4">
                {titles[index]}
              </span>
              <Link to={`/ViewMore/${titles[index]}`}>
                <button
                  className="bg-gray-800 p-1 rounded-full text-white hover:text-white
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-offset-gray-800 focus:ring-white text-md font-bold px-4"
                >
                  ተጨማሪ
                </button>
              </Link>
            </div>

            <div className="flex overflow-x-scroll pb-4 hide-scroll-bar">
              <div className="flex flex-nowrap  px-8">
                {allList[0]?.id !== undefined ? (
                  allList?.map((i) => {
                    return (
                      <div key={i.id}>
                        <Link to={`/ListPage/${i.id}`}>
                          <div className="p-4">
                            <div className="wrapper  antialiased text-gray-900 transform transition duration-500 hover:scale-110 cursor-pointer">
                              <div style={{ width: "300px" }}>
                                <img
                                  src={i.imageURL}
                                  alt="Cover_Image"
                                  className="w-full object-cover object-center rounded-lg shadow-md"
                                />
                                <div className="relative px-4 -mt-16  ">
                                  <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight   break-words">
                                      {i.title}
                                    </h4>
                                    <div className="flex items-baseline">
                                      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                        {i.category}
                                      </span>
                                      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                        &bull; {i.seenValue} views
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <div>No data found</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
