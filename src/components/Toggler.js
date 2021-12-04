import {React,useState,useEffect} from "react";
import "../styles/toggler.css";

function Toggler() {
  const [darkMode, setdarkMode] = useState(false)
  useEffect(() => {
    if(localStorage.getItem("Dark-Mode")){
      setdarkMode(true)
      document.body.classList.add("dark-mode")
    }
  }, [])
  const toggleMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if(element.classList.contains("dark-mode")){
      localStorage.setItem("Dark-Mode",true);
      setdarkMode(true)
    }else{
      localStorage.removeItem("Dark-Mode")
      setdarkMode(false)
    }
  };
  return (
    <label className="toggleLabel icon">
      <div className="toggle">
        <input
          className="toggle-state"
          type="checkbox"
          onClick={() => {
            toggleMode();
          }}
          checked={darkMode}
        />
        <div className="indicator"></div>
      </div>
    </label>
  );
}

export default Toggler;
