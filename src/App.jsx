import Aboutme from "./components/aboutme/Aboutme";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Proj from "./components/proj/Proj";
import Topbar from "./components/topbar/Topbar";
import Skills from "./components/skills/Skills";
import Menu from "./components/menu/Menu";

import './app.scss';
import { useState } from "react";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro/>
        <Aboutme/>
        <Skills/>
        <Proj/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
