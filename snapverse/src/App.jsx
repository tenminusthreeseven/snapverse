import React from "react";
import Navbar from "./assets/components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-stone-500">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="text-white text-7xl font-bold p-10">
        SHARE YOUR 
      </div>

      <Text />
    </div>
  );
};

const Text = () => {
  return (
    <div className="text-white text-3xl font-bold p-6">
      PHOTOS 
    </div>
  );
};

export default App;
