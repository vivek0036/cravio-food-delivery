import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const { categoryName, itemCount, items } = category;

  function handleClick() {
    setShowIndex();
  }

  return (
    <div className="bg-white shadow-xl">
      <div className="my-4 rounded-xl ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <h1 className=" text-3xl p-2  ">{`${categoryName}(${itemCount})`}</h1>

          <img
            className={`mr-2 w-6 transition-transform duration-300 ${
              showItems ? "rotate-180" : "rotate-0"
            }`}
            src="/down-arrow-for-accordion.svg"
            alt="🔻"
          />
        </div>
        {showItems && (
          <div className="p-1.5 pl-2.5">
            <ItemList items={items} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
