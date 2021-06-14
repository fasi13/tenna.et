import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];
const profile = ["Your Profile", "Settings", "Sign out"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="flex items-center"></div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
