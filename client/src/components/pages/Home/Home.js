import ProductSummary from '../../features/ProductSummary/ProductSummary';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, loadProductsRequest } from '../../../redux/productRedux';
import { useEffect } from 'react';

const Home = () => {
  const allProducts = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {allProducts.map((product) => {
          return (
            <ProductSummary key={product.id} {...product}></ProductSummary>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
