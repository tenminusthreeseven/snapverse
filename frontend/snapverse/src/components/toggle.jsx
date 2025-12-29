function Themetoggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded font-bold border
                 bg-gray-200 dark:bg-gray-800
                 text-black dark:text-white"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default Themetoggle;
