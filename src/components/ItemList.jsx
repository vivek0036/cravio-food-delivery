import React from "react";
import { RES_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="">
      {items.map((item) => (
        <div
          className=" p-2 m-2 w-full border-b-2 border-gray-200  flex justify-between"
          key={item.id}
        >
          <div className="p-2">
            <div className="text-2xl mb-2">
              <span>{item.name} </span>
              <span>₹{item.price}</span>
            </div>
            <p className="text-s ">{item.description}</p>
          </div>
          <div className="relative h-24 w-3/12 shrink-0">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${RES_IMAGE_URL}${item.imageId}`}
              alt=""
            />
            <button className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-3 border-green-300 border-1 rounded-lg text-green-500 text-lg hover:scale-103">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
