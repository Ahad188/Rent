import Award from "../Award/Award";
import Banner from "../Banner/Banner";
import Feature from "../Fetures/Feature";
import Location from "../Locaation/Location";
import Recent from "../Recent/Recent";

 

const Home = () => {
     return (
          <>
             <Banner/>
             <Feature/>  
             <Recent/>
             <Award/>
             <Location/>
          </>
     );
};

export default Home;