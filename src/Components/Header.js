import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./header.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// import React from "react";
// import { Link } from "react-router-dom";
// // reactstrap components
// import {
//   Button,
//   Collapse,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   Nav,
//   Container,
//   UncontrolledTooltip,
// } from "reactstrap";
export default function Header() {
  const history = useHistory();
  const onSearch = (i) => {
    let url = new URL(window.location);
    let c = url.searchParams.get("query");
    console.log(c);

    history.push({
      pathname: `/ViewMore/Search`,
      search: `?query=${i}`,
    });
    // window.location.reload();
  };
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e?.target?.value);
  };
  // const [collapseOpen, setCollapseOpen] = React.useState(false);
  // const [navbarColor, setNavbarColor] = React.useState(
  //   (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
  //     ? ""
  //     : " navbar-transparent"
  // );
  // const [buyButtonColor, setBuyButtonColor] = React.useState(
  //   (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
  //     ? "info"
  //     : "neutral"
  // );
  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 499 ||
  //       document.body.scrollTop > 499
  //     ) {
  //       setNavbarColor("");
  //       setBuyButtonColor("info");
  //     } else if (
  //       document.documentElement.scrollTop < 500 ||
  //       document.body.scrollTop < 500
  //     ) {
  //       setNavbarColor(" navbar-transparent");
  //       setBuyButtonColor("neutral");
  //     }
  //   };
  //   window.addEventListener("scroll", updateNavbarColor);
  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor);
  //   };
  // });
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/Landing">
                  <div className="flex-shrink-0 flex flex-wrap">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <span className="text-white text-xl pl-3">TENA</span>
                  </div>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {
                      <Fragment>
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                        <NavLink to="/Landing">
                          <div className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                            ዋና
                          </div>
                        </NavLink>
                        <NavLink to="/Categories">
                          <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            ምድብ
                          </div>
                        </NavLink>
                        <NavLink to="/ViewMore/Current">
                          <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            የቅርብ ጊዜ
                          </div>
                        </NavLink>
                        <NavLink to="/Landing">
                          <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            ሁሉም ምክሮች
                          </div>
                        </NavLink>
                        <NavLink to="/ViewMore/Favorite">
                          <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            ተወዳጆች
                          </div>
                        </NavLink>
                      </Fragment>
                    }
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Menu as="div" className="relative inline-block text-left">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="inline-flex justify-center w-36  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            &#127760; Language
                            <ChevronDownIcon
                              className="-mr-1 ml-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    አማርኛ
                                  </div>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <div
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    English
                                  </div>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        ></Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </div>
              <div className="search-box">
                <button
                  className="btn-search text-center"
                  style={{ textAlign: "-webkit-center" }}
                  onClick={() => {
                    onSearch(query);
                  }}
                >
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    fill="white"
                    viewBox="0 0 56.966 56.966"
                    style={{ textAlign: " -webkit-center" }}
                  >
                    <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
    s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
    c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
    s-17-7.626-17-17S14.61,6,23.984,6z"
                    />
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
                </button>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search Title"
                  value={query}
                  onChange={handleChange}
                />
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Fragment>
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <NavLink to="/Landing">
                  <div className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                    ዋና
                  </div>
                </NavLink>

                <NavLink to="/Categories">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    ምድብ
                  </div>
                </NavLink>
                <NavLink to="/ViewMore/Current">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    የቅርብ ጊዜ
                  </div>
                </NavLink>
                <NavLink to="/Landing">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    ሁሉም ምክሮች
                  </div>
                </NavLink>
                <NavLink to="/ViewMore/Favorite">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    ተወዳጆች
                  </div>
                </NavLink>
              </Fragment>
            </div>
            <div className="pt-4 pb-3 pl-4 border-t border-gray-700">
              <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        &#127760; Language
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                አማርኛ
                              </div>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                English
                              </div>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>

                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    +251-912-00-00-00
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
    // <>
    //   {collapseOpen ? (
    //     <div
    //       id="bodyClick"
    //       onClick={() => {
    //         document.documentElement.classList.toggle("nav-open");
    //         setCollapseOpen(false);
    //       }}
    //     />
    //   ) : null}
    //   <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
    //     <Container>
    //       <div className="navbar-translate">
    //         <NavbarBrand to="/home" tag={Link} id="navbar-brand">
    //           All Tech
    //         </NavbarBrand>
    //         <UncontrolledTooltip target="navbar-brand">
    //           Designed by all Tech
    //         </UncontrolledTooltip>
    //         <button
    //           onClick={() => {
    //             document.documentElement.classList.toggle("nav-open");
    //             setCollapseOpen(!collapseOpen);
    //           }}
    //           aria-expanded={collapseOpen}
    //           className="navbar-toggler"
    //         >
    //           <span className="navbar-toggler-bar top-bar"></span>
    //           <span className="navbar-toggler-bar middle-bar"></span>
    //           <span className="navbar-toggler-bar bottom-bar"></span>
    //         </button>
    //       </div>
    //       <Collapse isOpen={collapseOpen} navbar>
    //         <Nav className="ml-auto" id="ceva" navbar>
    //           <UncontrolledDropdown nav>
    //             <DropdownToggle
    //               caret
    //               color="default"
    //               data-toggle="dropdown"
    //               href="#pablo"
    //               id="navbarDropdownMenuLink1"
    //               nav
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               <i className="now-ui-icons design_app"></i>
    //               <p>መሰረታዊ መረጃዎች</p>
    //             </DropdownToggle>
    //             <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
    //               <DropdownItem to="/infos" tag={Link}>
    //                 <i className="now-ui-icons design_image"></i>
    //                 ለአንድሮይድ ስልኮች
    //               </DropdownItem>
    //             </DropdownMenu>
    //           </UncontrolledDropdown>
    //           <UncontrolledDropdown nav>
    //             <DropdownToggle
    //               caret
    //               color="default"
    //               data-toggle="dropdown"
    //               href="#pablo"
    //               id="navbarDropdownMenuLink"
    //               nav
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               <i
    //                 aria-hidden={true}
    //                 className="now-ui-icons files_paper"
    //               ></i>
    //               <p>የ ቴክ መረጃ ዜናዎች</p>
    //             </DropdownToggle>
    //             <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
    //               <DropdownItem to="/news" tag={Link}>
    //                 <i className="now-ui-icons shopping_box"></i>
    //                 ዜናዎች
    //               </DropdownItem>
    //             </DropdownMenu>
    //           </UncontrolledDropdown>
    //           <UncontrolledDropdown nav>
    //             <DropdownToggle
    //               caret
    //               color="default"
    //               data-toggle="dropdown"
    //               href="#pablo"
    //               id="navbarDropdownMenuLink"
    //               nav
    //               onClick={(e) => e.preventDefault()}
    //             >
    //               <i
    //                 aria-hidden={true}
    //                 className="now-ui-icons design_image"
    //               ></i>
    //               <p>የ ዩቲዩብ ቪድዮዎች</p>
    //             </DropdownToggle>
    //             <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
    //               <DropdownItem tag={Link} to="/vedio-link">
    //                 <i className="now-ui-icons business_bulb-63"></i>
    //                 ቪድዮዎች
    //               </DropdownItem>
    //             </DropdownMenu>
    //           </UncontrolledDropdown>
    //           <NavItem>
    //             <Button
    //               className="nav-link btn-default"
    //               color={buyButtonColor}
    //               href="#pablo"
    //             >
    //               <p>Contact Us</p>
    //             </Button>
    //           </NavItem>
    //         </Nav>
    //       </Collapse>
    //     </Container>
    //   </Navbar>
    // </>
  );
}
