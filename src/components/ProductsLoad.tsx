const ProductsLoad = ({ limit }: { limit: number }): JSX.Element => {
  return (
    <>
      {0 < limit ? (
        Array.from(Array(limit)).map((elm, index) => {
          return (
            <div key={index} className='card bordered animate-pulse'>
              <div className='h-80 rounded bg-gray-100'></div>
              <div className='card-body'>
                <div className='space-y-4'>
                  <div className='h-6 bg-gray-100 rounded'></div>
                  <div className='h-6 bg-gray-100 rounded w-5/6'></div>
                  <div className='h-6 bg-gray-100 rounded w-1/4'></div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>제품이 없습니다.</div>
      )}
    </>
  );
};

export default ProductsLoad;
