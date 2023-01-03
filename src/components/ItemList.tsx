import React, { Suspense } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Product, productsList } from '../store/products';
import ProductsLoad from './ProductsLoad';

type Items = {
  title?: string;
  limit?: number;
  data?: Array<Product>;
  scroll?: boolean;
} & typeof defaultProps;

const defaultProps = {
  title: '',
  limit: 4,
  data: [],
  scroll: false,
};

const ItemList = ({ title, limit, scroll }: Items): JSX.Element => {
  const ProductsList = React.lazy(() => import('./ProductsList'));
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  let products: Product[] = 'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : [];
  switch (title) {
    case '패션':
      products = products.filter((item) => item.category === "men's clothing" || item.category === "women's clothing").slice(0, limit);
      break;
    case '액세서리':
      products = products.filter((item) => item.category === 'jewelery').slice(0, limit);
      break;
    case '디지털':
      products = products.filter((item) => item.category === 'electronics').slice(0, limit);
      break;
    default:
      products = products;
      break;
  }
  return (
    <>
      <h2 className='mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold'>{title}</h2>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list' data-scroll={scroll}>
        <Suspense fallback={<ProductsLoad limit={limit} />}>
          <ProductsList products={products} limit={limit} />
        </Suspense>
      </div>
    </>
  );
};

ItemList.defaultProps = defaultProps;

export default ItemList;
