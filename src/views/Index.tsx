import Slider from '../components/Slider';
import ItemList from '../components/ItemList';

const Index = (): JSX.Element => {
  return (
    <>
      <Slider />
      <section className='pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto'>
        <ItemList title='패션' scroll={true} />
      </section>
      <section className='pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
        <ItemList title='액세서리' scroll={true} />
      </section>
      <section className='pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto'>
        <ItemList title='디지털' scroll={true} />
      </section>
    </>
  );
};

export default Index;
