import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import AllCats from "./AllCats";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
              <Route path={"/"} element={<AllCats/>}></Route>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
