type Rating = {
  rate?: number;
  count?: number;
} & typeof defaultProps;

const defaultProps = {
  rate: 0,
  count: 0,
};

const Rating = ({ rate, count }: Rating): JSX.Element => {
  const stars = Array.from(Array(10));
  return (
    <div className='flex items-center mt-3'>
      <div className='rating rating-half'>
        {stars.map(($elm, index) => {
          return <input type='radio' name='rating-10' key={`rating${index}`} className={`bg-yellow-400 cursor-default mask mask-star-2 ${index % 2 == 0 ? 'mask-half-1' : 'mask-half-2'}`} disabled checked={index + 1 <= rate * 2} />;
        })}
      </div>
      <div className='ml-2'>
        {rate} / {count} 참여
      </div>
    </div>
  );
};

Rating.defaultProps = defaultProps;

export default Rating;
