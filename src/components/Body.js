import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

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
      //console.log(json);
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []; // data destructuring
      //console.log(restaurants);
      setListOfRestaurent(restaurants);
      setAllRestaurants(restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline, Please check your Internet Connection.
      </h1>
    );

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
      <div className='filter flex'>
        <div className='m-4 p-4'>
          <input
            type='text'
            className='border border-solid border-black '
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyPress={handleKeyPress}
            placeholder='Search restaurants...'
          />
          <button
            className='px-4 py-2 m-4 bg-green-100 rounded-lg'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className='m-4 p-4 flex items-center '>
          <button
            className='px-4 py-4 bg-gray-100 rounded-lg'
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
      </div>

      <div className='flex flex-wrap'>
        {listOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
