import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../../Data/data";
import { useHistory } from "react-router-dom";

export default function Carousal() {
  const history = useHistory();
  const onClickCarousal = (i) => {
    history.push({
      pathname: `/ListPage/${i}`,
    });
  };
  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={30000}
        centerMode={false}
        className=""
        containerClass="container"
        // customDot={<CustomDot />}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data?.map((i) => {
          return i.isFeatured ? (
            <div
              key={i.id}
              className="h-72 rounded-md"
              style={{
                backgroundColor: "grey",
                backgroundImage: `url(${i.imageURL})`,
                backgroundSize: "cover",
              }}
              onClick={() => {
                onClickCarousal(i.id);
              }}
            >
              <div className="h-full pb-6 px-12 flex  items-end cursor-pointer">
                <div className="w-full text-center">
                  <div
                    className=" p-2 text-3xl filter drop-shadow-lg rounded-md"
                    style={{
                      background: "#728C99",
                      display: "inline",
                      color: "white",
                      lineHeight: "50px",
                    }}
                  >
                    {i.title}
                  </div>
                  <br />
                  <br />

                  <div
                    className="p-2 filter drop-shadow-lg  rounded-md"
                    style={{
                      background: "#6C96A2",
                      display: "inline",
                      color: "white",
                    }}
                  >
                    {i.category}
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })}

        {/* <div className="bg-red-200 h-72">Item 2</div>
        <div className="bg-red-200 h-72">Item 3</div>
        <div className="bg-red-200 h-72">Item 4</div> */}
      </Carousel>
    </div>
  );
}
