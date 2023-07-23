import College from "../../Componet/College/College";
import Career from "../../Pages/Career/Career";
import ExtraStudy from "../../Pages/ExtraStudy/ExtraStudy";
import Gallery from "../../Pages/Gallery/Gallery";
import Graduation from "../../Pages/NextGarduation/Graduation";
import Banner from "../Banner/Banner";


const Home = () => {
     return (
          <div>
               <Banner />
               <Gallery/>
               <College />
               <Graduation />
               <ExtraStudy />
               <Career/>
          </div>
     );
};

export default Home;