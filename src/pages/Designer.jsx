import TopBar from "../components/designer-page/topBar/TopBar.jsx";
import Layout from "../components/Layout.jsx";
import SimpleSlider from "../components/designer-page/slick/Carousel.jsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Designer = () => {
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()

    const introCardData = useSelector(state => state.card.IntroCardHTML);
    console.log('introCardData',introCardData);


    return (
        <div>
            <TopBar/>
            <Layout>
                {/* <Background/> */}
                <SimpleSlider/>
            </Layout>
        </div>
    );
};

export default Designer;