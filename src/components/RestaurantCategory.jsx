import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {
  const { categoryName, itemCount, items } = category;
  return (
    <div className="bg-white shadow-xl">
      <div className="  my-4   rounded-xl">
        <div className="flex justify-between">
          <h1 className=" text-3xl p-2  ">{`${categoryName}(${itemCount})`}</h1>
          <button onClick={() => console.log("clicked")}>
            <img
              className="w-6 mr-2"
              src="/down-arrow-for-accordion.svg"
              alt=""
            />
          </button>
        </div>
        <div className="p-1.5 pl-2.5">
          <ItemList items={items} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
