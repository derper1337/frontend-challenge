import {useDispatch, useSelector} from "react-redux";
import {Empty, Image, Spin} from "antd";
import LikeButton from "./LikeButton";
import {addFavThunk, deleteFavThunk} from "../app/appReducer";
import QueueAnim from "rc-queue-anim";

const FavoriteCats = ({addFav, favCats, deleteFav}) => {
    const catsList = favCats.map(c => {
        return <div className="image-container" key={c.id}>
            <Image className="image" src={c.image.url}  placeholder={<Spin size={"large"} style={{padding:"40px"}}/>}/>
            <LikeButton addFav={addFav} catId={c.image_id} favCats={favCats} deleteFav={deleteFav}/>
        </div>
    })

    return <>
        <div>
            <QueueAnim className="image-list" animConfig={[
                {opacity: [1, 0], translateY: [0, -50]},
                {opacity: [1, 0], translateY: [0, 50]}
            ]}>
                {catsList.length === 0
                    ? <Empty
                        imageStyle={{height: "300px", margin: 0, padding: 0}}
                        description={"Список избранного пуст :("}/>
                    : catsList
                }
            </QueueAnim>
        </div>
    </>
}

const FavoriteCatsContainer = () => {
    const dispatch = useDispatch();
    const favCats = useSelector(state => state.app.favCats);
    const addFav = (imgId) => {
        dispatch(addFavThunk(imgId))
    }
    const deleteFav = (imgId) => {
        dispatch(deleteFavThunk(imgId))
    }
    return <FavoriteCats favCats={favCats} deleteFav={deleteFav} addFav={addFav}/>
}
export default FavoriteCatsContainer