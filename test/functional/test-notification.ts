import open from 'open';
import {sendNotification} from '../../src/messaging';
import {config} from '../../src/config';
import {getTestStore} from '../util';

<<<<<<< HEAD
const link: Link = {
  brand: 'test:brand',
  cartUrl: 'https://www.example.com/cartUrl',
  model: 'test:model',
  price: 100,
  series: 'test:series',
  url: 'https://www.example.com/url',
  name: "Test Product Name",
  screenshot: 'https://pbs.twimg.com/profile_images/1362198571185893379/ki4usJyO_400x400.jpg',
};

const store: Store = {
  currency: '',
  labels: {
    inStock: {
      container: 'test:container',
      text: ['test:text'],
    },
    loginUrl: 'https://www.example.com/url',
  },
  links: [link],
  name: 'test:name',
};
=======
const store = getTestStore();
const link = store.links[0];
>>>>>>> 0906f64d001413383ae30861ecb155561ec4eac5

/**
 * Send test email.
 */
sendNotification(link, store);

/**
 * Open browser.
 */
if (!config.docker && config.browser.open) {
  open(link.cartUrl ?? link.url);
  open(link.url);
}
