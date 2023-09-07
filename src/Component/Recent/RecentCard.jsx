import { useQuery } from '@tanstack/react-query';
import  './recent.css';

const RecentCard = () => {

     const {data:list=[]} = useQuery({
          queryKey:['list'],
          queryFn: async ()=>{
               const res = await fetch('http://localhost:5000/list')
               return res.json()
          }
     })

     return (
       
      <div className='content grid3 '>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button card-fl'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
  
     );
};

export default RecentCard;