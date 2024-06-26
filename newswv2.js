const domain = 'lands.localhost';

self.options = {
  domain: domain,
};

importScripts(`https://${domain}/sw_v2.js`);
