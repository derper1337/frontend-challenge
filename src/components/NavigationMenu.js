import {NavLink} from "react-router-dom";

const NavigationMenu = () =>{
    return <>
        <NavLink  to={"/"}> all cats</NavLink>
        <NavLink  to={"/fav"}> fav cats</NavLink>
    </>
}

export default NavigationMenu;