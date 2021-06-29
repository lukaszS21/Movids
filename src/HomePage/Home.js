import './HomeCSS/Home.css';
import HomeNavBar from "./HomeNavBar"
import PageFooter from "../PageFooter/PageFooter";
import Border from "./Border";
import Ad from "./Ad";
function Home() {
 return(
    <div className="BackGround1">
        <div className="BackGround2">
            <HomeNavBar/>
            <Border/>
            <div className="Content">
                content

            </div>
        </div>

        <Ad/>
        <Border/>
        <PageFooter/>

    </div>


 )
}
export default Home;