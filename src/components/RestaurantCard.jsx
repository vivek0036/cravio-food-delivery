// import React from "react";
import { RES_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    imageId,
    locality,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    discount,
  } = resData;

  return (
    <div className="w-full max-w-[280px] overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:scale-[0.97] hover:shadow-lg cursor-pointer">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={`${RES_IMAGE_URL}${imageId}`}
          alt={name}
          className="h-full w-full object-cover"
        />

        {discount && (
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8">
            <p className="text-lg font-extrabold text-white">{discount}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-3">
        <h3 className="truncate text-lg font-bold text-gray-900">{name}</h3>

        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
          <span className="flex items-center gap-1">
            <span className="text-green-600">★</span>
            {avgRating}
          </span>

          <span>·</span>

          <span>{deliveryTime} mins</span>
        </div>

        <p className="truncate text-sm text-gray-500">{cuisines.join(", ")}</p>

        <p className="truncate text-sm text-gray-500">{locality}</p>

        <p className="text-sm font-semibold text-gray-800">
          ₹{costForTwo} for two
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
