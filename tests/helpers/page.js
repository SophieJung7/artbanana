const puppeteer = require('puppeteer');

class CustomPage {
  // This build() function combines puppeteer Page class with CustomPage class here.
  static async build() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    const customPage = new CustomPage(page);

    return new Proxy(customPage, {
      get: function (target, property) {
        return customPage[property] || browser[property] || page[property];
      },
    });
  }
  constructor(page) {
    this.page = page;
  }
  async login() {
    this.page.setDefaultTimeout(10000);
  }
}

module.exports = CustomPage;
