import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="search-container">
        <h3>Search</h3>
      </div>

      <div className="filter-res">
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Popular Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
