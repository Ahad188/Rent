import Heading from "../Common/Heading/Heading";
import FeatureCard from "./FeatureCard";

import './feature.css'

  
 
 const Feature = () => {

           

     return (
          <>
          <section className='featured background'>
            <div className='container'>
              <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
              <FeatureCard />
            </div>
          </section>
        </>
     );
 };
 
 export default Feature;