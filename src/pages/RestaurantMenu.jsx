import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenuInfo, setResMenuInfo] = useState();
  const [menuItems, setMenuItems] = useState([]);

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

  const { name, id, avgRating } = resMenuInfo.restaurant;

  return (
    <div>
      <div className="details">{name}</div>

      <div className="testing">
        <ul>
          {menuItems.map((itemList) => (
            <div key={itemList.categoryId}>
              <h1>{itemList.categoryName}</h1>
              <ul>
                {itemList.items.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <hr />
            </div>
          ))}
        </ul>
      </div>
      {/* <div className="items">
        <ul>
          {menuItems[7].items.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
        
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
