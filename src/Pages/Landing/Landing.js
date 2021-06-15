/* This example requires Tailwind CSS v2.0+ */
import "./landing.css";
import Carousal from "./Components/Carousal";
import HorizontalList from "./Components/HorizontalList";
import React, { useLayoutEffect } from "react";

export default function Landing() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-3 lg:px-6">
          <h1 className="text-3xl font-bold text-gray-900">ዋና ገጽ</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8">
        <Carousal />
        <HorizontalList />
      </main>
    </div>
  );
}
