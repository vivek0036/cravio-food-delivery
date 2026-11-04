import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [topRated, setTopRated] = useState(false);

  const [searchText, setSearchText] = useState("");

  const applyFilters = (search, isTopRated) => {
    let filterd = resList;
    if (search.trim()) {
      filterd = filterd.filter(
        (res) =>
          res.name.toLowerCase().includes(search.toLowerCase()) ||
          res.cuisines.join(" ").toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (isTopRated) {
      filterd = filterd.filter((res) => res.avgRating > 4.1);
    }

    setFilteredResList(filterd);
  };

  const searchButtonClick = () => {
    applyFilters(searchText, topRated);
  };

  const topRestaurantsButtonClick = () => {
    let rated = !topRated;
    setTopRated(rated);
    applyFilters(searchText, rated);
  };

  const fetchData = async () => {
    const data = await import("../data/restaurantList.json");

    const json = data.default.restaurants;

    setResList(json);
    setFilteredResList(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="mt-8 mx-16">
      <div className=" mb-6  flex flex-wrap items-center justify-center gap-4">
        <div className="flex gap-3 items-center">
          <input
            className="border border-gray-300 rounded-2xl p-1 pl-2"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-cyan-100 w-20 shadow-2xl rounded-lg p-1 pl-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
            onClick={searchButtonClick}
          >
            Search
          </button>
        </div>
        <button
          className="bg-orange-500 shadow-2xl rounded-lg p-1 pl-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
          onClick={topRestaurantsButtonClick}
        >
          {topRated ? "All Restaurants" : "Top Restaurants"}
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 ">
        {filteredResList.map((res) => (
          <Link to={`/resMenu/${res.id}`} key={res.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
