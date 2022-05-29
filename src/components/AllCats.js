import {useDispatch, useSelector} from "react-redux";
import {addFavThunk, deleteFavThunk, getCatsThunk} from "../app/appReducer";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import CatsList from "./CatsList";

const AllCats = ({cats, addFav, loadMore, favCats, deleteFav}) => {
    const catsList = cats.map(c => {
        return <div key={c.id}>
            <CatsList catsId={c.id} imgUrl={c.url} deleteFav={deleteFav} addFav={addFav} favCats={favCats}/>
        </div>
    })
    return (
        <InfiniteScroll className={"scroll-component"}
                        dataLength={catsList.length}
                        next={loadMore}
                        hasMore={true}
                        loader={<Loader/>}>
            <div className={"image-list"}>
                {catsList}
            </div>
        </InfiniteScroll>)
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