import {useDispatch, useSelector} from "react-redux";
import {Empty, Image, Spin} from "antd";
import {addFavThunk, deleteFavThunk} from "../app/appReducer";
import QueueAnim from "rc-queue-anim";
import CatsList from "./CatsList";

const FavoriteCats = ({addFav, favCats, deleteFav}) => {
    const catsList = favCats.map(c => {
        return <div key={c.id}>
            <CatsList catsId={c.image_id} imgUrl={c.image.url} deleteFav={deleteFav} addFav={addFav} favCats={favCats}/>
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