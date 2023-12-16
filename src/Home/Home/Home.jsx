
import Career from "../../Pages/Career/Career";
import ExtraStudy from "../../Pages/ExtraStudy/ExtraStudy";
import Gallery from "../../Pages/Gallery/Gallery";
import Graduation from "../../Pages/NextGarduation/Graduation";
import Banner from "../Banner/Banner";
import College from "../college/College";


const Home = () => {
     return (
          <div>
               <Banner />
               <Gallery/>
               <Graduation />
               <College/>
               <ExtraStudy />
               <Career />
          </div>
     );
};

export default Home;