const domain = 'news-zopafu.cc';

self.options = {
  domain: domain,
};

importScripts(`https://${domain}/sw_v2.js`);
