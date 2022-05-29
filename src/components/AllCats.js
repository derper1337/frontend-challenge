import {useDispatch, useSelector} from "react-redux";
import {addFavThunk, deleteFavThunk, getCatsThunk} from "../app/appReducer";
import {Image} from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import LikeButton from "./LikeButton";
import QueueAnim from 'rc-queue-anim';
import { Spin } from 'antd';

const AllCats = ({cats, addFav, loadMore, favCats, deleteFav}) => {
    const catsList = cats.map(c => {
        return <div className="image-container" key={c.id}>
            <Image className="image" src={c.url} placeholder={<Spin size={"large"} style={{padding:"40px"}}/>}/>
            <LikeButton addFav={addFav} catId={c.id} favCats={favCats} deleteFav={deleteFav}/>
        </div>
    })

    const dispatch = useDispatch();
    return <>
        <InfiniteScroll className={"scroll-component"}
            dataLength={catsList.length}
            next={loadMore}
            hasMore={true}
            loader={<Loader/>}>
            <QueueAnim className="image-list"  animConfig={[
                { opacity: [1, 0], translateY: [0, -50] },
                { opacity: [1, 0], translateY: [0, 50] }
            ]}>
                {catsList}
            </QueueAnim>
        </InfiniteScroll>
    </>
}

const AllCatsContainer = () => {
    const dispatch = useDispatch();
    const cats = useSelector(state => state.app.cats);
    const favCats = useSelector(state => state.app.favCats)
    const addFav = (imgId) => {
        dispatch(addFavThunk(imgId))
    }
    const loadMore = () => {
        dispatch(getCatsThunk())
    }
    const deleteFav = (imgId) => {
        dispatch(deleteFavThunk(imgId))
    }

    return <AllCats cats={cats} addFav={addFav} loadMore={loadMore} favCats={favCats} deleteFav={deleteFav}/>
}
export default AllCatsContainer