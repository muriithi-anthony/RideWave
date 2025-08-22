import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-neutral text-primary-text flex flex-col items-center justify-center">
      <h1 className="text-3xl text-primary">Nord Theme</h1>
      <button className="btn-primary mt-4" onClick={() => setIsDark(!isDark)}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default App;
