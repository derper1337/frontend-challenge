import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader=()=>{
    return <Spin className={"loader"} indicator={
        <LoadingOutlined style={{fontSize:"60px"}} spin/>
    }/>
}
export default Loader