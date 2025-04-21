import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData";
import { useState } from "react";




const Body = () => { 

    const [listOfRestaurant , setListOfRestaurent] = useState(resList.restaurants);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        //Filter Logic here 
                        const filteredList = resList.restaurants.filter(
                            (resObj) => resObj.restaurant.avgRating > 4.4
                        );
                        setListOfRestaurent(filteredList)
                        console.log(filteredList)
                    }}
                    
                >
                    Top Rated Rastaurants
                </button>
            </div>
            <div className="res-container">
                { 
                    listOfRestaurant.map((restaurantObj) => (
                            <RestaurantCard
                                key={restaurantObj.restaurant.id}
                                resData={restaurantObj.restaurant}
                            />
                        ))
                }
            </div>
        </div>
    )
};

export default Body;