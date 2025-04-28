import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurent] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []; // data destructuring
      // console.log(restaurants);
      setListOfRestaurent(restaurants);
      setAllRestaurants(restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    if (searchText === '') {
      setListOfRestaurent(allRestaurants);
      return;
    }

    const filteredRestaurants = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurent(filteredRestaurants);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyPress={handleKeyPress}
            placeholder='Search restaurants...'
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = allRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setListOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className='res-container'>
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
