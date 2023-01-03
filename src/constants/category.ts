export const Category: any = {
  "men's clothing": '패션',
  "women's clothing": '패션',
  electronics: '디지털',
  jewelery: '액세서리',
} as const;

type categoryType = typeof Category[keyof typeof Category];
