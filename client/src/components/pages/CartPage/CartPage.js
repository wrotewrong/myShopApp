import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getOrdersProduct } from '../../../redux/orderRedux';
import CartSummary from '../../features/CartSummary/CartSummary';

const Cart = () => {
  const products = useSelector(getOrdersProduct);

  if (!products || products.length === 0) {
    return <div className="container">There are no products in your cart</div>;
  } else {
    return (
      <>
        <div>
          <h2> Your cart:</h2>
          {products.map((product) => {
            return (
              <CartSummary
                editable={true}
                key={product.productId}
                {...product}
              ></CartSummary>
            );
          })}
        </div>

        <NavLink to="/">
          <Button>Get back to shopping</Button>
        </NavLink>
        <NavLink to="/summary">
          <Button>Proceed to summary</Button>
        </NavLink>
      </>
    );
  }
};

export default Cart;
