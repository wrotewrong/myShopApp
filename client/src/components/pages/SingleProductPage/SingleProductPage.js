import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductById,
  loadProductByIdRequest,
} from '../../../redux/productRedux';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => getProductById(state, id));

  useEffect(() => {
    dispatch(loadProductByIdRequest(id));
  }, [dispatch, id]);

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
                  src={product?.images[1].url}
                  className="img-fluid"
                  alt="product"
                  style={{
                    height: '100%',
                  }}
                />
              </div>
              <div className="col-12 col-sm-4 mb-1">
                <img
                  src={product?.images[2].url}
                  className="img-fluid"
                  alt="product"
                  style={{
                    height: '100%',
                  }}
                />
              </div>
              <div className="col-12 col-sm-4 mb-1">
                <img
                  src={product?.images[3].url}
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
            <div className="mr-2">
              <input type="number"></input>
            </div>
            <div>
              <Button variant="outline-success">Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
