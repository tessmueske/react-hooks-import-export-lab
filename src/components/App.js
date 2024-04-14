import React from "react";
import NavBar from "../components/NavBar.js";
import Home from "../components/Home.js";
import About from "../components/About.js";
import { 
  username,
  city,
  image 
} from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <p>{username}</p>
      <p>{city}</p>
      <img src={image} />
    </div>
  );
}

export default App;
