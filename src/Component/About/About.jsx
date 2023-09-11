import Back from "../Common/Back/Back";
import Heading from "../Common/Heading/Heading";
import img from '../../assets/images/about.jpg'
import './about.css'
 

const About = () => {
     return (
          <>
          <section className='about'>
            <Back name='About Us' title='About Us - Who We Are?' cover={img} />
            <div className='container flex mtop'>
              <div className='left row'>
                <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
    
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <button className='btn2'>More About Us</button>
              </div>
              <div className='right row'>
                <img src='https://i.ibb.co/2n3XZVp/BVE-annual-report-2018-EIGA.jpg' alt='' />
              </div>
            </div>
          </section>
        </>
     );
};

export default About;