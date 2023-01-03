import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Product, productsList } from '../store/products';
import { useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';

const Search = () => {
  const navigate = useNavigate();
  const ProductsLoadable = useRecoilValueLoadable<Product[]>(productsList);
  const products: Product[] = 'hasValue' === ProductsLoadable.state ? ProductsLoadable.contents : [];
  const [search, setSearch] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [filterItems, setFilterItems] = useState(products);
  const $search = useRef<HTMLInputElement>(null);
  const $searchedItem = '.js-searchedItem';

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event?.target.value);
  };

  const goLink = (id: number) => {
    setSearch('');
    navigate(`/product/${id}`);
  };

  const goSearchList = (event: any) => {
    if (40 === event.keyCode) {
      event.preventDefault();
      let $next = event.target.nextElementSibling;
      if (!$next || !$next.querySelector($searchedItem)) {
        return;
      }
      $next.querySelector($searchedItem).focus();
    } else if (13 === event.keyCode) {
      event.preventDefault();
      let $next = event.target.nextElementSibling.querySelector('li a');
      !!$next && $next.click();
    }
  };

  const changeTarget = (event: any) => {
    if (38 === event.keyCode) {
      event.preventDefault();
      let $prev = event.target.parentElement.previousElementSibling;
      if (!$prev) {
        $search?.current?.focus();
        return;
      }
      $prev.querySelector($searchedItem).focus();
    } else if (40 === event.keyCode) {
      event.preventDefault();
      let $next = event.target.parentElement.nextElementSibling;
      if (!$next) {
        return;
      }
      $next.querySelector($searchedItem).focus();
    }
  };

  const toggleSearch = () => {
    $search?.current?.classList.toggle('-z-10');
    $search?.current?.classList.toggle('translate-y-full');
    $search?.current?.classList.toggle('!opacity-100');
    $search?.current?.blur();
    setSearch('');
    setFilterItems([]);
  };

  useEffect(() => {
    setFilterItems(
      products.filter(($elm) => {
        if (search === '') return;
        return $elm.title.toLowerCase().includes(search.toLowerCase());
      }),
    );
  }, [search, products]);

  useEffect(() => {
    if ('hasValue' === ProductsLoadable.state) {
      setDisabled(false);
    }
  }, [ProductsLoadable.state]);

  return (
    <div className='dropdown'>
      <button type='button' onClick={toggleSearch} className='flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 stroke-gray-700 dark:stroke-white' fill='none' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
      </button>
      <input type='text' placeholder='검색' disabled={disabled} ref={$search} value={search} onChange={handleSearchChange} onKeyDown={goSearchList} className='fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput' />
      <ul className='!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600'>
        {filterItems.map((product) => {
          return (
            <li key={product.id}>
              <a
                href='#'
                onClick={(e) => {
                  e.preventDefault();
                  goLink(product.id);
                }}
                onTouchStart={(e) => {
                  e.preventDefault();
                  goLink(product.id);
                }}
                onKeyDown={changeTarget}
                className='text-left js-searchedItem'
              >
                <span className='text-gray-600 dark:text-white line-clamp-2'>{product.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
