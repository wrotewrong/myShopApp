import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductById,
  loadProductByIdRequest,
} from '../../../redux/productRedux';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import {
  addProductToOrder,
  //   createOrder,
  getOrders,
} from '../../../redux/orderRedux';
import { useForm } from 'react-hook-form';
import { PRODUCT_MAX_ORDER, PRODUCT_MIN_ORDER } from '../../../config';
import store from '../../../redux/store';

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => getProductById(state, id));
  const orders = useSelector(getOrders);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const [productAmount, setPrdouctAmount] = useState(1);

  useEffect(() => {
    dispatch(loadProductByIdRequest(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    // if (Object.keys(orders).length === 0) {
    //   dispatch(createOrder());
    // }

    if (orders?.products?.find((product) => product.productId === id)) {
      alert(
        'This product is already in your Cart. Visit the Cart to change its amount',
      );
    } else {
      dispatch(
        addProductToOrder({
          name: product.name,
          price: product.price,
          orderedAmount: Number(productAmount),
          productId: id,
          details: '',
        }),
      );

      const state = store.getState();
      localStorage.setItem(
        'cartProducts',
        JSON.stringify(state.orders.products),
      );
    }
  };

  return (
    <>
      <div className="mt-5 container">
        <div className="row mt-5">
          <div className="col-12 col-lg-5 mt-3 text-center">
            <img
              src={product?.images[0].url}
              className="img-fluid"
              alt="product"
              style={{
                height: '100%',
                maxHeight: '600px',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="col-12 col-lg-7 mt-3">
            <div className="row col-12 justify-content-between">
              <h1>{product?.name}</h1>
              <h1>Price: {product?.price}</h1>
            </div>
            <p className="text-justify">{product?.description}</p>
            <div className="row no-gutters col-12 justify-content-between align-items-end ">
              <div className="col-12 col-sm-4 mb-1">
                <img
                  src={product?.images[1]?.url}
                  className="img-fluid"
                  alt="product"
                  style={{
                    height: '100%',
                  }}
                />
              </div>
              <div className="col-12 col-sm-4 mb-1">
                <img
                  src={product?.images[2]?.url}
                  className="img-fluid"
                  alt="product"
                  style={{
                    height: '100%',
                  }}
                />
              </div>
              <div className="col-12 col-sm-4 mb-1">
                <img
                  src={product?.images[3]?.url}
                  className="img-fluid"
                  alt="product"
                  style={{
                    height: '100%',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 mt-2 row justify-content-end">
            <form
              className="col-12 mt-4 row justify-content-center"
              onSubmit={validate(handleAddToCart)}
            >
              <div className="mr-2">
                Amount:
                <input
                  {...register('amount', {
                    required: 'You must specify the amount you want to order',
                    min: {
                      value: PRODUCT_MIN_ORDER,
                      message: `You must add at least ${PRODUCT_MIN_ORDER} product`,
                    },
                    max: {
                      value: PRODUCT_MAX_ORDER,
                      message: `You can't order more than ${PRODUCT_MAX_ORDER} products`,
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'The amount must be an integer',
                    },
                  })}
                  value={productAmount}
                  onChange={(e) => setPrdouctAmount(e.target.value)}
                  type="number"
                ></input>
                {errors.amount && (
                  <span className="d-block form-text text-danger mt-2">
                    {errors.amount.message}
                  </span>
                )}
              </div>
              <div>
                <Button type="submit" variant="outline-success">
                  Add to cart
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
