import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import FavoriteCats from "./components/FavoriteCats";
import AllCats from "./components/AllCats";
import NavigationMenu from "./components/NavigationMenu";
import {startApp} from "./app/appReducer";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(startApp())
    },[])

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
