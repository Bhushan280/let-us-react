import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurentMenu from '../utils/useRestaurentMenu';
import RestaurantCategory from './RestaurantCategory'
import { useState } from 'react';

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  // console.log(
  //   'Item Cards',
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  //console.log(categories);

  return (
    <div className='text-center '>
      <h1 className='font-bold m-5 text-2xl'>{name}</h1>
      <p className='font-bold text-xl'>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/** categories accordian */}
      {categories.map((category, index) => {
        return (
          //this is controlled component :::
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.categoryId}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurentMenu;
