import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Whyus from "./components/Whyus";
import CreateQR from "./components/CreateQR";
import FAQs from "./components/FAQs";
import Demo from "./components/Demo";
import Clients from "./components/clients/Clients1";
import Plans from "./components/Plans";
import Opening from "./components/Opening";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Page/Main";

const App = () => {
  const [openModal, setOpenModal] = useState(true);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
