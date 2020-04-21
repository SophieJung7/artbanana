require('babel-register')({
  presets: ['es2015', 'react'],
});

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

const generateSitemap = () => {
  return new Sitemap(router)
    .build('https://www.interviewon.com')
    .save('./public/sitemap.xml');
};

generateSitemap();
