import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  /**
   * Efficient Redux Store Subscription Strategy
   *
   * When accessing Redux store data, prefer granular slice selection over full store subscription.
   *
   * Anti-pattern:
   * const store = useSelector((store) => store);
   * const cartItems = store.cart.items;
   *
   * Performance Implications:
   * - Subscribes to entire store updates, regardless of relevance
   * - Triggers component re-renders for unrelated state changes
   * - Creates unnecessary DOM reconciliation operations
   *
   * Best Practice:
   * - Select only required state slice directly
   * - Optimizes component rendering performance
   * - Reduces unnecessary re-renders by shallow comparing only relevant state
   * - Aligns with React component update optimization strategies
   */
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button
          className='p-2 m-2 bg-black text-white rounded-2xl'
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1> Cart is Empty Add Items to the Cart </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
