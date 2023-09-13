import { useQuery } from "@tanstack/react-query";
import "./feature.css";

const FeatureCard = () => {
  const { data: featured = [] } = useQuery({
    queryKey: ["feature"],
    queryFn: async () => {
      const res = await fetch("https://rent-server-jzll05bcn-ahad188.vercel.app/features");
      return res.json();
    },
  });
  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="" />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureCard;
