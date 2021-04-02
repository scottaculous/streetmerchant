import {Link, Store} from '../../src/store/model';
import open from 'open';
import {sendNotification} from '../../src/notification';
import {config} from '../../src/config';

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

/**
 * Send test email.
 */
sendNotification(link, store);

/**
 * Open browser.
 */
if (config.browser.open) {
  open(link.cartUrl ?? link.url);
  open(link.url);
}
