import {connect, useDispatch} from "react-redux";
import {getCatsThunk} from "../app/appReducer";
import {Image} from "antd";

const AllCats = ({getCats, cats}) => {
    const catsList = cats.map(c => {
        return <Image className="image" src={c.url} key={c.id}/>
    })

    return <>
        <div>
            <div className="image-container">
                {catsList}
            </div>
            <button onClick={getCats}>get cats reducer</button>
            <button onClick={() => console.log(cats)}>console</button>
        </div>
    </>
}

export default connect((state) => ({
    cats: state.app.cats
}), {
    getCats: getCatsThunk
})(AllCats);