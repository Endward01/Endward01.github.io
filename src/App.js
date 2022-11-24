import { useEffect } from "react";
import "./App.css";
import { SectionFour } from "./components/Section-Four/SectionFour";
import { SectionOne } from "./components/Section-One/SectionOne";
import { SectionThree } from "./components/Section-Three/SectionThree";
import { SectionTwo } from "./components/Section-Two/SectionTwo";

function App() {
  useEffect(() => {
    document.title = "Daniel Prętki | Front-End Developer";
  }, []);
  return (
    <main className=" bg-secondary text-white space-y-20">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  );
}

export default App;
