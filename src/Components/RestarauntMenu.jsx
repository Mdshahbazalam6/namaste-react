import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { restaurantList } from '../constant';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import useRestaraunt from '../utils/useRestaraunt';

const RestarauntMenu = () => {
    const {id} = useParams();
    // const [restaurant, setRestaurant] = useState({});

    // useEffect(() => {
    //     console.log('dhbwvnlsfvfsv')
    //     const data = restaurantList.find((ele) => ele.info.resId.toString() === id)

    //     console.log(data);
    //     setRestaurant(data);
    // },[])
    const {restaurant} = useRestaraunt(id);
    useEffect(() => {
        console.log('dhbwvnlsfvfs')
    }, [])

  return (
    <div style={{marginTop: "500px"}}>RestarauntMenu {id}
      {restaurant?.info?.name && restaurant?.info?.image?.urlWithParams ?  <RestaurantCard {...restaurant.info} /> : <Shimmer />}
    </div>
  )
}

export default RestarauntMenu 