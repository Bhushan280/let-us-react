import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  // State Management:
  // - listOfRestaurant: Holds the currently displayed restaurant list (modified by filters/search)
  // - searchText: Stores the current value of the search input field
  // - allRestaurants: Maintains the original unfiltered list from API (preserved for resetting filters)
  const [listOfRestaurant, setListOfRestaurent] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);

  // Component Lifecycle Management:
  // useEffect with empty dependency array runs once after initial render
  // Used for fetching initial restaurant data
  useEffect(() => {
    fetchData();
  }, []);

  // Data Fetching Function:
  // Async function to fetch restaurant data from Swiggy API
  // Uses optional chaining to safely access nested API response structure
  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await data.json();

      // Initialize state:
      // - allRestaurants preserves original data for resetting filters
      // - listOfRestaurant is used for display (initially shows all restaurants)
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurent(restaurants);
      setAllRestaurants(restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Search Functionality:
  // Filters restaurants based on search input text
  // Always filters from original allRestaurants to avoid cumulative filtering
  const handleSearch = () => {
    if (searchText === '') {
      // Reset to show all restaurants when search is empty
      setListOfRestaurent(allRestaurants);
      return;
    }

    // Case-insensitive search filter:
    // Checks if restaurant name includes search text (partial match)
    const filteredRestaurants = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurent(filteredRestaurants);
  };

  // Keyboard Event Handling:
  // Allows triggering search with Enter key for better UX
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Conditional Rendering:
  // Shows loading shimmer animation until data is fetched
  // switches to restaurant list when data is available
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          {/* Controlled Search Input:
              - value tied to searchText state
              - onChange updates searchText state
              - onKeyPress handles Enter key submission */}
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

        {/* Rating Filter Button:
            - Filters restaurants with rating > 4.3
            - Always uses original allRestaurants data
            - Prevents cumulative filters by starting fresh */}
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

      {/* Restaurant List Container:
          - Uses listOfRestaurant state to render cards
          - Key prop helps React optimize re-renders
          - resData prop drilling to child component */}
      <div className='res-container'>
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
