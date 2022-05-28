import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import FavoriteCats from "./components/FavoriteCats";
import AllCats from "./components/AllCats";
import NavigationMenu from "./components/NavigationMenu";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <NavigationMenu/>
                <Routes>
                    <Route path={"/"} element={<AllCats/>}/>
                    <Route path={"/Fav"} element={<FavoriteCats/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
