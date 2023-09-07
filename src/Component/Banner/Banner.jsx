import Heading from '../Common/Heading/Heading';
import './Banner.css'

const Banner = () => {
     return (
          <>
               <section className="hero">
                    <div className="container">
                         <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.'/>
                         <from className='from-box'>
                              <div className="box">
                                   <span>City/Street</span>
                                   <input type="text" name="" id="" placeholder="Location" />
                              </div>
                              <div className="box">
                                   <span>Property Type</span>
                                   <input type="text" name="" id="" placeholder="Property Type" />
                              </div>
                              <div className="box">
                                   <span>Price Range</span>
                                   <input type="text" name="" id="" placeholder="Price Range" />
                              </div>
                              <div className="box">
                                   <h4>Advance Filter</h4>
                              </div>
                              <button className="btn1">
                                   <i className="fa fa-search"></i>
                              </button>
                         </from>
                    </div>
               </section>
          </>
     );
};

export default Banner;