import React, { useEffect, useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // SearchText is a local state variable
  const [SearchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState(restaurantList);

  const filterData = (SearchText) => {
    if(!SearchText) return null;

    const filterData = allRestaurants.filter((restaurant) => {
        return restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase()); 
    })
    return filterData;
  }

  useEffect(() => {
    getRestaurant();
  }, [])

  const getRestaurant = async () => {
    try {
      setTimeout(() => {
        setAllRestaurants(restaurantList)
      },2000)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
   
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value)
            const data = filterData(e.target.value);
            data ? setRestaurants(data) : setRestaurants(restaurantList)
          }}
        />
        <button className="search-button" onClick={() => {
            const data = filterData(SearchText);
            data ? setRestaurants(data) : setRestaurants(restaurantList)
        }}>Search</button>
      </div>
      {
        restaurants.length === 0 ? 
        <Shimmer /> :
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.resId} {...restaurant.info} showLink={true} />
          );
        })}
      </div>
      }
    </>
  );
};

export default Body;
