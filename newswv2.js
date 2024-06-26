const domain = 'lands.localhost';

self.options = {
  timestamp: Date.now(),
  domain: domain,
};

importScripts(`https://${domain}/sw_v2.js`);
