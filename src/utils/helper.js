export const filterData = (SearchText) => {
    if(!SearchText) return null;

    const filterData = allRestaurants.filter((restaurant) => {
        return restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase()); 
    })
    return filterData;
}