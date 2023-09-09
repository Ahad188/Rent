 import { useQuery } from '@tanstack/react-query';
import Heading from '../Common/Heading/Heading';
import './award.css'

const Award = () => {
     const {data:awards=[]} = useQuery({
          queryKey:['awards'],
          queryFn:async()=>{
               const res = await fetch('http://localhost:5000/awards')
               return res.json()
          }
     })
     return (
          <>
      <section className='awards padding'>
        <div className='container'>
          <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />

          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  {/* <span>{val.icon}</span> */}
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
     );
};

export default Award;