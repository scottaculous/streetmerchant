import {Store} from './store';

export const CollectiveMinds: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'button#AddToCart-product-template',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'span#ProductPrice-product-template',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://collectivemindsstore.myshopify.com/products/cronus-zen',
    },
    {
      brand: 'collectiveminds',
      model: 'zen',
      series: 'cronus',
      url: 'https://collectivemindsstore.myshopify.com/products/cronus-zen',
    },
  ],
  name: 'collectiveminds',
};
