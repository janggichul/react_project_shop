import ProductsView from '../components/ProductsView';

const Products = (): JSX.Element => {
  return (
    <section className='pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
      <ProductsView />
    </section>
  );
};

export default Products;
