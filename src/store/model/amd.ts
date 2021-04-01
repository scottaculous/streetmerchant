import {Store} from './store';

export const Amd: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.btn-shopping-cart',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-page-description h4',
      euroFormat: false,
    },
    outOfStock: {
      container: '.product-out-of-stock',
      text: ['out of cart'],
    }
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amd.com/en/direct-buy/5450881400/us',
    },
    {
      name: 'AMD RYZEN 9 5950X Processor',
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881400/us?add-to-cart=true',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.amd.com/en/direct-buy/5450881400/us',
    },
    {
      name: 'AMD RYZEN 9 5900X Processor',
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5450881500/us?add-to-cart=true',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.amd.com/en/direct-buy/5450881500/us',
    },
    // {
    //   brand: 'amd',
    //   cartUrl:
    //     'https://www.amd.com/en/direct-buy/5450881600/us?add-to-cart=true',
    //   model: '5800x',
    //   series: 'ryzen5800',
    //   url: 'https://www.amd.com/en/direct-buy/5450881600/us',
    // },
    // {
    //   brand: 'amd',
    //   cartUrl:
    //     'https://www.amd.com/en/direct-buy/5450881700/us?add-to-cart=true',
    //   model: '5600x',
    //   series: 'ryzen5600',
    //   url: 'https://www.amd.com/en/direct-buy/5450881700/us',
    // },
    {
      name: 'AMD Radeon RX 6800 XT',
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458372800/us?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800xt',
      url: 'https://www.amd.com/en/direct-buy/5458372800/us',
    },
    {
      name: 'AMD Radeon RX 6800',
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458373400/us?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6800',
      url: 'https://www.amd.com/en/direct-buy/5458373400/us',
    },
    {
      name: 'AMD Radeon RX 6700 XT',
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5496921400/us?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6700xt',
      url: 'https://www.amd.com/en/direct-buy/5496921400/us',
    },
    {
      name: 'AMD Radeon RX 6900 XT',
      brand: 'amd',
      cartUrl:
        'https://www.amd.com/en/direct-buy/5458372200/us?add-to-cart=true',
      model: 'amd reference',
      series: 'rx6900xt',
      url: 'https://www.amd.com/en/direct-buy/5458372200/us',
    },
  ],
  name: 'amd',
};
