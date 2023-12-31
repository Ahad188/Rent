import "./Header.css";
import logo from "../../../assets/images/hero/logo.png";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const { data: nav = [] } = useQuery({
    queryKey: ["nav"],
    queryFn: async () => {
      const res = await fetch("https://rent-server-jzll05bcn-ahad188.vercel.app/navs");
      return res.json();
    },
  });

  const [navList, setNavList] = useState(false);
  return (
    <>
      <header>
        <div className="container header-fl">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "header-fl"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button header-fl">
            <h4>
              <span>0</span> My List
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
