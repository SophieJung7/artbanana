const Page = require('./helpers/page');
let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
});

afterEach(async () => {
  await page.close();
});

test('Header has the right logo', async () => {
  const text = await page.getContentsOf('.catsnap-logo-on');
  expect(text).toEqual('On');
});
