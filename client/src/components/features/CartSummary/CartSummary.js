import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editOrder, removeProductFromOrder } from '../../../redux/orderRedux';

const CartSummary = ({ productId, name, price, productAmount, details }) => {
  const [amountState, setAmountState] = useState(productAmount);
  const [detailsState, setDetailsState] = useState(details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      editOrder({
        productId,
        productAmount: Number(amountState),
        details: detailsState,
      }),
    );
  }, [dispatch, productId, amountState, detailsState]);

  const handleRemove = () => {
    dispatch(removeProductFromOrder(productId));
  };

  return (
    <div className="col-12 px-0 row border align-items-center">
      <div className="col-3 px-0 text-center">{name}</div>
      <div className="col-1 px-0 m-0 text-center">
        <input
          className="w-100"
          value={amountState}
          onChange={(e) => setAmountState(e.target.value)}
          type="number"
        ></input>
      </div>
      <div className="col-1 px-0 text-center">{price}</div>
      <div className="col-1 px-0 text-center">{price * productAmount}</div>
      <div className="col-3 px-0 text-center">
        <textarea
          className="w-100"
          placeholder="Details regarding the product"
          value={detailsState}
          onChange={(e) => setDetailsState(e.target.value)}
        ></textarea>
      </div>
      <div className="col-3 px-0 text-center">
        <Button onClick={handleRemove}>Remove</Button>
      </div>
    </div>
  );
};

export default CartSummary;
