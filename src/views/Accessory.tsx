import ItemList from '../components/ItemList';
import BreadCrumb from '../components/Breadcrumb';

const Accessory = (): JSX.Element => {
  return (
    <section className='pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
      <BreadCrumb category='홈' crumb='액세서리' />
      <article className='pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto'>
        <ItemList title='액세서리' limit={4} />
      </article>
    </section>
  );
};

export default Accessory;
