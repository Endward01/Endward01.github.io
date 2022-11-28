import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import SectionFour from "./components/Section-Four/SectionFour";
import SectionOne from "./components/Section-One/SectionOne";
import SectionThree from "./components/Section-Three/SectionThree";
import SectionTwo from "./components/Section-Two/SectionTwo";

function App() {
  const [isLoading, setLoading] = useState(true);
  const fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2250));
  };

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".spinner-wrapper");
      if (el) {
        document
          .querySelector(".main")
          .classList.remove("overflow-hidden", "h-screen");
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  return (
    <>
      <main className="main overflow-hidden h-screen bg-secondary text-white space-y-20">
        <Loader />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
    </>
  );
}

export default App;
