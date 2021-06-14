import React, { useLayoutEffect, useState } from "react";

import data from "../../Data/data";
export default function ListPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  let listInfo;
  const idd = window.location.pathname.split("/").pop();
  let arr = [];
  if (localStorage.getItem("favList"))
    arr = JSON.parse(localStorage.getItem("favList"));

  const [isFav, setIsFav] = useState(arr?.includes(idd));
  // const favList = new Set();
  // const fList = JSON.parse(localStorage.getItem("favList"));
  // for (var k = 0; k < fList?.length; k++) favList.add(fList[k]);

  // console.log(fList);
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === idd) {
      listInfo = data[i];
      break;
    }
  }

  return (
    <div className=" min-h-screen">
      <div
        className="flex h-32 flex justify-end items-end"
        style={{
          backgroundImage: `url(${listInfo.imageURL})`,
          backgroundSize: "cover",
        }}
      >
        <div
          onClick={() => {
            setIsFav(!isFav);
            let storedFavList = [];
            storedFavList = JSON.parse(localStorage.getItem("favList")) ?? [
              idd,
            ];
            if (!isFav) {
              if (localStorage.getItem("favList")) storedFavList.push(idd);
            } else {
              storedFavList.indexOf(idd) !== -1 &&
                storedFavList.splice(storedFavList.indexOf(idd), 1);
            }
            localStorage.setItem("favList", JSON.stringify(storedFavList));
            // storedFavList.indexOf(idd) !== -1 &&
            //   storedFavList.splice(storedFavList.indexOf(idd), 1);
            // storedFavList.split("2");
          }}
          className="text-5xl text-red-500 pr-3"
        >
          {isFav ? (
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
            </svg>
          ) : (
            <svg
              width="40"
              height="40"
              viewBox="64 64 896 896"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"
                fill="#333"
              />
              <path
                d="M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z"
                fill="#E6E6E6"
              />
            </svg>
          )}
        </div>
        <span className="text-5xl text-red-500"></span>
      </div>
      <div className="mx-2 px-4 py-4 relative bg-white p-6 rounded-lg shadow-lg ">
        <div
          className="text-center text-2xl text-semibold pb-2"
          style={{ textAlign: "-webkit-center" }}
        >
          <div className="pb-3">{listInfo.title}</div>
          <hr color="grey" width="120" />
        </div>
        <div>
          <span className="font-bold">Category: </span>
          {listInfo.category}
        </div>
        <div>
          <span className="font-bold">Tags: </span>#{listInfo.tags.join(" #")}
        </div>
        <div>
          <span className="font-bold">&#128065;</span>
          {listInfo.seenValue} እይታ
        </div>

        <div className="pt-2">
          <span className="font-bold">Description: </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: listInfo.detail }} />
      </div>
    </div>
  );
}
