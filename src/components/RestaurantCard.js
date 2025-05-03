import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({
  resData: { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla },
}) => {
  return (
    <div className='m-4 p-4 w-[250px] rounded-lg  bg-gray-100 hover:bg-gray-200'>
      <img
        className='rounded-lg'
        alt='res-logo'
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className='font-bold py-4 text-lg'>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
