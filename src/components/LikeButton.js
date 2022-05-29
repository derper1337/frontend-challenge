import {HeartOutlined, HeartFilled} from "@ant-design/icons";
import {Button, message} from "antd";
import {useState} from "react";

const LikeButton = ({addFav, catId, favCats, deleteFav}) => {
    const [active, setActive] = useState(false);
    let matchId;
    favCats.forEach(fav => catId===fav.image_id ? matchId = fav.id : null)
    return <Button key={catId} icon={active || matchId
        ?<HeartFilled  style={{fontSize: "30px", color: "#d6247d"}}/>
        :<HeartOutlined style={{fontSize: "30px", color: "#d6247d"}}/>}
                   className={"like-button"}
                   onMouseEnter={() => setActive(true)}
                   onMouseLeave={() => setActive(false)}
                   onClick={() => {
                       setActive(!active)
                       if (matchId){
                           deleteFav(matchId);
                           message.warning("Котик убран из избранного");
                       }
                       else{
                           addFav(catId);
                           message.success("Котик добавлен в избранное");
                       }
                   }}/>
}

export default LikeButton;
