import { useState } from "react";
import "./App.css";
import { Header } from "./Components";
import { Route, Routes } from "react-router-dom";
import { ContactUs } from "./Pages";

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Routes>
        <Route>
        
        </Route>
      </Routes> */}
      <ContactUs />

    </div>
  );
}

export default App;
