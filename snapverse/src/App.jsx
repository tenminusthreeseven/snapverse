import React from "react";
import Navbar from "./assets/components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-stone-500">
      {/* Navbar */}
      <Navbar />

      {/* Main Content with Tailwind animations */}
      <div className="text-white font-bold p-10">
        <div className="text-7xl animate-bounce">
          SHARE YOUR
        </div>
        <div className="text-7xl animate-pulse">
          PHOTOS
        </div>
        <div className="text-6xl animate-fadein">
          WITH WORLD
        </div>
      </div>
    </div>
  );
};

export default App;