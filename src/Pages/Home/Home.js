import React, { useLayoutEffect } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import healthFamily from "./../../assets/health-family.jpg";
export default function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className=" bg-white ">
        <div className="mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              {({ open }) => (
                <>
                  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav
                      className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                      aria-label="Global"
                    >
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          <div>
                            <span className="sr-only">Workflow</span>
                            <img
                              alt="workflow"
                              className="h-8 w-auto sm:h-10"
                              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      static
                      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 pt-12">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="pb-4 text-indigo-600 block xl:inline text-center">
                    TennaAdam
                  </span>{" "}
                </h1>
                {/* <p className="mt-3 text-center text-base text-gray-500 sm:mt-5 text-2xl sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"> */}
                <h4 className="text-center">
                  First 3 Days Free, Then 2 Birrs Per day <br />
                  የመጀመሪያ 3 ቀን በነፃ፤ ቀጥሎ በቀን 2 ብር. <br />
                  ለመቀጠል እባክዎ የሞባይል ዳታ ያብሩ!
                </h4>
                {/* </p> */}
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/Landing">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Subscribe
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={healthFamily}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
