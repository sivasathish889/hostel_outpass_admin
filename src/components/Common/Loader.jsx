import { LineWave } from 'react-loader-spinner'

const Loader = ({visible}) => {
    return (
        <LineWave
            visible={visible}
            height="300"
            width="300"
            color="#4fa94d"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass="absolute top-[25%] left-[50%]"
            firstLineColor="#117583"
            middleLineColor="black"
            lastLineColor="#117583"
            
        />
    )
}

export default Loader