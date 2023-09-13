import { useQuery } from "@tanstack/react-query";
import "./price.css";

const PriceCard = () => {
  const { data: price = [] } = useQuery({
    queryKey: ["price"],
    queryFn: async () => {
      const res = await fetch("https://rent-server-jzll05bcn-ahad188.vercel.app/prices");
      return res.json();
    },
  });
  return (
    <>
      <div className="content flex mtop">
        {price.map((item, index) => (
          <div className="box shadow" key={index}>
            <div className="topbtn">
              <button className="btn3">{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
              <span>$</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val, index) => {
                const { text, change } = val;
                return (
                  <li key={index}>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    ></label>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
            <button
              className="btn5"
              style={{
                background: item.plan === "Standard" ? "#27ae60" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "#27ae60",
              }}
            >
              Start {item.plan}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PriceCard;
