import Award from "../Award/Award";
import Banner from "../Banner/Banner";
import Feature from "../Fetures/Feature";
import Location from "../Locaation/Location";
import Price from "../Price/Price";
import Recent from "../Recent/Recent";
import Team from "../Team/Team";

 

const Home = () => {
     return (
          <>
             <Banner/>
             <Feature/>  
             <Recent/>
             <Award/>
             <Location/>
             <Team/>
             <Price/>
          </>
     );
};

export default Home;