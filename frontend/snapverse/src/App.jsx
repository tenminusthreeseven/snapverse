import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./methods";
import Themetoggle from "./components/toggle";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <p className="p-8">Page content</p>

      <Themetoggle theme={theme} toggleTheme={toggleTheme} />
      <ProductList />
    </div>
  );
}

export default App;
