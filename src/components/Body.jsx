import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI.jsx";
import RestaurantCard from "./RestaurantCard.jsx";

const Body = () => {
  const [resList, setResList] = useState([]);

  const fetchData = async () => {
    const data = await import("../data/restaurantList.json");

    const json = data.default.restaurants;

    setResList(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-wrap justify-center gap-5  my-24  mx-16">
      {resList.map((res) => (
        <RestaurantCard key={res.id} resData={res} />
      ))}
    </div>
  );
};

export default Body;
