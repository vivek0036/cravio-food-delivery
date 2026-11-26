import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RES_IMAGE_URL } from "../utils/constants";
import RestaurantCategory from "../components/RestaurantCategory";

const RestaurantMenu = () => {
  const [resMenuInfo, setResMenuInfo] = useState();
  const [menuItems, setMenuItems] = useState([]);

  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, [resId]);
  async function fetchData() {
    const data = await import(`../data/restaurantDetails/${resId}.json`);
    setResMenuInfo(data.default);
    setMenuItems(data.default.menu);
  }

  if (!resMenuInfo) return <div>Loading...</div>;

  const {
    name,
    id,
    avgRating,
    imageId,
    totalRatings,
    costForTwo,
    deliveryTime,
    locality,
    areaName,
  } = resMenuInfo.restaurant;

  return (
    <div className="mt-12 mb-36 mx-auto  w-6/12 border-amber-950 ">
      <div className="res-info my-4 shadow-xl">
        <h1 className="font-bold text-2xl p-2 px-4">{name}</h1>
        <img
          className="rounded-2xl p-2"
          src={`${RES_IMAGE_URL}${imageId}`}
          alt=""
        />
        <h3 className="p-2 px-4">
          {avgRating} <span className="text-green-600">★</span>{" "}
          <span>{totalRatings}</span>
        </h3>
        <h2 className="px-4 pb-2">Cost for Two {costForTwo}₹</h2>
        <h2 className="px-4 pb-2">
          <span>{deliveryTime}</span> <span>{locality}</span>{" "}
          <span>{areaName}</span>
        </h2>
      </div>

      <div className="category-items">
        {menuItems.map((category, index) => (
          <RestaurantCategory
            key={category.categoryId}
            category={category}
            showItems={index === showIndex && true}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
