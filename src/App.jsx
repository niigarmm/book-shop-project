import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import "../src/index.css";
import { useContext } from "react";
import { ModeContext } from "./context/ModeContext";
function App() {
  const [changeMode] = useContext(ModeContext); 
  return (
    <>
      <a href="#upper">
        <div className={changeMode === "light" ? "up" : "dark-up"}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.32992 17.9998C6.01992 17.9998 4.65992 15.6498 6.31992 12.7798L8.99992 8.15982C10.6599 5.28982 13.3699 5.28982 15.0299 8.15982L17.7099 12.7798C19.3699 15.6498 18.0099 17.9998 14.6999 17.9998H9.32992Z"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
