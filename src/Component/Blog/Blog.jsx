import Back from "../Common/Back/Back";
import RecentCard from "../Recent/RecentCard";
import img from '../../assets/images/services.jpg'
 

const Blog = () => {
     return (
          <>
          <section className='blog-out mb'>
            <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
            <div className='container recent'>
              <RecentCard />
            </div>
          </section>
        </>
     );
};

export default Blog;