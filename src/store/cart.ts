import { atom, selector } from 'recoil';
import { CART_ITEM } from '../composables/useCartLoad';
import { productsList } from './products';

export interface CartInfo {
  id: number;
  count: number;
}

export interface CartItems {
  id: string;
  title: string;
  price: number;
  count: number;
  image: string;
}

export interface CartState {
  items: Record<string | number, CartInfo>;
}

export const cartState = atom<CartState>({
  key: 'cart',
  default: JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {},
});

export const cartCount = selector<number>({
  key: 'cartCount',
  get: ({ get }) => {
    const cartItems = get(cartState);
    return Object.keys(cartItems).reduce((acc: number, index: string) => {
      return acc + cartItems[index].count || 0;
    }, 0);
  },
});

export const cartTotal = selector<number>({
  key: 'cartTotal',
  get: ({ get }) => {
    const products = get(productsList);
    const cartItems = get(cartState);
    return Object.keys(cartItems).reduce((acc: number, id: string) => {
      return acc + cartItems[id].count * products[parseInt(id) - 1].price || 0;
    }, 0);
  },
});

export const cartList = selector<CartItems[]>({
  key: 'cartList',
  get: ({ get }) => {
    const products = get(productsList);
    const cartItems = get(cartState);
    return Object.keys(cartItems).map((id) => {
      const items = cartItems[id];
      return {
        id: items.id,
        image: products[items.id - 1].image,
        title: products[items.id - 1].title,
        count: items.count,
        price: items.count * products[items.id - 1].price,
      };
    });
  },
});

export const addToCart = (cart: CartState, id: number) => {
  if (!cartState[id]) {
    cartState[id] = {
      id,
      count: 1,
    };
    return {
      ...cart,
      [id]: {
        id,
        count: 1,
      },
    };
  }
  cartState[id].count++;
  return { ...cart, [id]: { id: id, count: cartState[id].count } };
};

export const removeFromCart = (cart: CartState, id: number) => {
  const tempCart = { ...cart };
  if (tempCart[id].count === 1) {
    delete tempCart[id];
    return tempCart;
  } else {
    return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } };
  }
};
