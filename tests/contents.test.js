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

test('Landing shows prolist', async () => {
  const text = await page.getContentsOf('.introduce-pros');
  expect(text).toEqual('인터뷰온의 취업전문가들을 소개합니다.');
});

test('Landing shows reviews', async () => {
  const text = await page.getContentsOf('.interviewon-review');
  expect(text).toEqual('인터뷰온 합격후기');
});

test('Pro page shows reviews', async () => {
  await page.goto('http://localhost:3000/pro/0');
  const text = await page.getContentsOf('.customer-review');
  expect(text).toEqual('리뷰');
});

test('Sorry page shows contactUs button', async () => {
  await page.goto('http://localhost:3000/sorry/type0');
  const text = await page.getContentsOf('.btn-contact-us');
  expect(text).toEqual('인터뷰온에 문의하기');
});

test('contactUs button redirects to contactUs page', async () => {
  await page.goto('http://localhost:3000/sorry/type0');
  await page.click('.btn-contact-us');
  const url = await page.url();
  expect(url).toEqual('http://localhost:3000/contactus');
});
