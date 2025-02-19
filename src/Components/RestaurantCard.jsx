import React from "react";

const RestaurantCard = ({
    image,
    name,
    cuisine,
    area,
    distance,
    cft,
    rating,
}) => {
    return (
        <div className="card">
            <img src={image.urlWithParams} />
            <h2>{name}</h2>
            <h4>{cuisine.map((ele) => ele.name).join(", ")}</h4>
            <h4>{area}</h4>
            <span>
                <h4>
                    <i className="fa-solid fa-star"></i>
                    {rating.aggregate_rating}
                </h4>
                <h4>{distance}</h4>
                <h4>{cft.text}</h4>
            </span>
        </div>
    );
};

export default RestaurantCard;