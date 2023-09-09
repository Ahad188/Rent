 
import { useQuery } from '@tanstack/react-query';
import Heading from '../Common/Heading/Heading';
import './location.css'
const Location = () => {
     const {data:location = []} = useQuery({
          queryKey:['location'],
          queryFn:async ()=>{
               const res = await fetch('http://localhost:5000/location')
               return res.json()
          }
     })
     return (
          <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='boxs' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <span>{item.Villas}</span>
                    <span>{item.Offices}</span>
                    <span>{item.Apartments}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
     );
};

export default Location;