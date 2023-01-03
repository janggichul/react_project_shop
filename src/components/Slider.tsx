import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Slider = () => {
  const items = [
    {
      name: 'fashion',
      title: '물빠진 청바지!',
      text: '이제 막 도착한 패션 청바지를 구경해 보세요.',
    },
    {
      name: 'digital',
      title: '신속한 업무처리!',
      text: '다양한 디지털 상품을 둘러보세요.',
    },
    {
      name: 'grocery',
      title: '신선한 식품!',
      text: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.',
    },
  ];

  interface sliderItem {
    name: string;
    title: string;
    text: string;
  }

  return (
    <Carousel autoPlay showThumbs={false} interval={6000} showStatus={false} infiniteLoop={true} className='carousel-container'>
      {items.map((item: sliderItem, index: number) => {
        return (
          <div key={item.name} className='carousel-slide'>
            <div className='carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10'>
              <h2 className='text-2xl lg:text-4xl font-bold text-white'>{item.title}</h2>
              <p className='my-2 text-white'>{item.text}</p>
              <Link to={`/${item.name}`} className='btn btn-sm lg:btn-md mt-3'>
                바로가기
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 ml-1' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd' />
                </svg>
              </Link>
            </div>
            <img src={`/img_shop_${item.name}.jpeg`} alt={item.name} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
