import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      console.log("Dark: ", isDark);
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Dark: ", isDark);
    }
  }, [isDark]);

  return (
    <div className="min-h-screen min-w-screen  bg-base-100 text-primary-text flex flex-col overflow-x-hidden p-2">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
