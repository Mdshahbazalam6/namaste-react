import React, { useEffect, useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
    // SearchText is a local state variable
  const [SearchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState(restaurantList);

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

  const offline = useOnline();

  if(!offline){
    return <h1>You are offline please check your netWork and try again</h1>
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
            const data = filterData (SearchText);
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
