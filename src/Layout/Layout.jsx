import { Outlet } from "react-router-dom";
import Header from "../Component/Common/Header/Header";
// import Footer from "../Component/Common/Footer/Footer";

 

const Layout = () => {
     return (
          <>
              <Header/>
              <Outlet/>
              {/* <Footer/> */}
          </>
     );
};

export default Layout;