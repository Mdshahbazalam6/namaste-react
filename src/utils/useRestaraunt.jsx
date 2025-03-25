import React, { useState } from 'react'

const useRestaraunt = (id) => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        const data = restaurantList.find((ele) => ele.info.resId.toString() === id)

        console.log(data);
        setRestaurant(data);
    },[id])

  return {restaurant};
}

export default useRestaraunt