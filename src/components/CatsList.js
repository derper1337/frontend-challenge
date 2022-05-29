import {Image, Spin} from "antd";
import LikeButton from "./LikeButton";


const CatsList = ({catsId, imgUrl, deleteFav, addFav, favCats}) => {
        return <div className="image-container" key={catsId}>
            <Image className="image" src={imgUrl}
                   placeholder={<Spin size={"large"} style={{padding: "40px"}}/>}/>
            <LikeButton addFav={addFav} catId={catsId} favCats={favCats} deleteFav={deleteFav}/>
        </div>
}

export default CatsList;