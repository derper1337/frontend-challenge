import {NavLink} from "react-router-dom";
import {Menu} from "antd";


const NavigationMenu = () =>{
    return <>
        <header>
            <Menu
                className={"navigation-menu"}
                theme="dark"
                style={{backgroundColor:"rgb(50,170, 255)"}}
                mode="horizontal">
                <Menu.Item key={"all"}> <NavLink  to={"/"}> Все котики</NavLink></Menu.Item>
                <Menu.Item key={"fav"}> <NavLink  to={"/fav"}> Любимые котики </NavLink></Menu.Item>
            </Menu>
        </header>
    </>
}

export default NavigationMenu;