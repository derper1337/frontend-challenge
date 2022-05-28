import {NavLink} from "react-router-dom";
import {Menu} from "antd";


const NavigationMenu = () =>{
    return <>
        <header>
            <Menu
                theme="dark"
                mode="horizontal">
                <Menu.Item> <NavLink  to={"/"}> all cats</NavLink></Menu.Item>
                <Menu.Item> <NavLink  to={"/fav"}> fav cats</NavLink></Menu.Item>
            </Menu>
        </header>
    </>
}

export default NavigationMenu;