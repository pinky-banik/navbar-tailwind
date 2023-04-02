import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import ShortNav from "./components/Navbar/ShortNav";

const App = () => {
  return (
    <section

      className="h-screen 
      font-[Poppins] "
    >
      <ShortNav/>
      <Navbar />
      
    </section>
  );
};

export default App;
