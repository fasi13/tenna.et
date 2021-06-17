import React, { useLayoutEffect } from "react";
import data from "./../../Data/data";
import { Link } from "react-router-dom";

let allList = [];
const data2 = data
  .sort((a, b) => b.seenValue - a.seenValue)
  .slice(0, data.length);

const data3 = data
  .sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted))
  .slice(0, data.length);
let title = "";
const assignToList = () => {
  const idd = "Current";

  if ("Mostly-Viewed" === idd) {
    allList = data2;
    title = "በብዛት የታዩ";
  } else if ("Current" === idd) {
    allList = data3;
    title = "የቅርብ ጊዜ";
  } else if ("Favorite" === idd) {
    title = "ተወዳጆች";
    let data4 = [{}];
    let favList = [];
    if (localStorage.getItem("favList"))
      favList = JSON.parse(localStorage.getItem("favList"));

    for (let index = 0, i = 0; index < data.length; index++) {
      if (favList.includes(data[index].id)) {
        data4[i] = data[index];
        i++;
      }
    }
    allList = data4;
  } else if ("Search" === idd) {
    title = "የፍለጋ ውጤት";
    let data5 = [{}];
    let url = new URL(window.location);
    let c = url.searchParams.get("query");
    for (var k = 0; k < data.length; k++) {
      if (data[k].title.indexOf(c) > -1) {
        data5[k] = data[k];
      }
    }
    allList = data5;
  }
  // window.location.reload();
};
export default function Current() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-3 lg:px-6">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
      </header>
      {assignToList()}
      {allList?.map((i) => {
        // if (i.id)
        return (
          <div
            key={i.id}
            className=" justify-between m-6 "
            style={{ placeContent: "center" }}
          >
            <Link to={`/ListPage/${i.id}`}>
              <div className="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
                <img
                  className="rounded-lg rounded-b-none"
                  src={i.imageURL}
                  alt="thumbnail"
                  loading="lazy"
                />
                <div className="flex justify-between -mt-4 px-4 ">
                  <span className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5">
                    {i.category}
                  </span>
                  <span className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      width="18px"
                      height="20px"
                      x="0px"
                      y="0px"
                      viewBox="0 0 469.333 469.333"
                      fill="#3B82E4"
                    >
                      <g>
                        <g>
                          <g>
                            <path d="M234.667,170.667c-35.307,0-64,28.693-64,64s28.693,64,64,64s64-28.693,64-64S269.973,170.667,234.667,170.667z" />
                            <path
                              d="M234.667,74.667C128,74.667,36.907,141.013,0,234.667c36.907,93.653,128,160,234.667,160
				c106.773,0,197.76-66.347,234.667-160C432.427,141.013,341.44,74.667,234.667,74.667z M234.667,341.333
				c-58.88,0-106.667-47.787-106.667-106.667S175.787,128,234.667,128s106.667,47.787,106.667,106.667
				S293.547,341.333,234.667,341.333z"
                            />
                          </g>
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                    <p className="text-blue-500 font-semibold text-xs">
                      {i.seenValue}
                    </p>
                  </span>
                </div>
                <div className="py-2 px-4 ">
                  <h1 className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer">
                    {i.title}
                  </h1>
                </div>
                <div className="px-4 space-y-2  border-t border-gray-700 pt-2 pb-4 mx-2">
                  <div
                    className="text-gray-400 font-normal leading-5 tracking-wide overflow-ellipsis	"
                    dangerouslySetInnerHTML={{
                      __html:
                        i.detail?.length > 155
                          ? i.detail.substr(0, 155 - 1) + " &hellip;[Read More]"
                          : i.detail,
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
