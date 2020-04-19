const Page = require('./helpers/page');
let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000/signup');
});

afterEach(async () => {
  await page.close();
});

test('Can see the signup form', async () => {
  const text = await page.getContentsOf('.btn-sign-up');
  expect(text).toEqual('1분안에 가입하기');
});

test('Can sign up with right email and password', async () => {
  // Sign up with new email address
  let r = Math.random().toString(36).substring(7);
  await page.type('.input-exampleInputEmail', `${r}@interviewon.com`);
  await page.type('.input-exampleInputPassword', 'Test_1234');
  await page.click('.btn-signup');
  await page.waitFor('.introduce-pros');
  let url = await page.url();
  expect(url).toEqual('http://localhost:3000/');
  // Try Sign in with registered email
  await page.goto('http://localhost:3000/signin');
  await page.type('.input-exampleInputEmail', `${r}@interviewon.com`);
  await page.type('.input-exampleInputPassword', 'Test_1234');
  await page.click('.btn-sign-in');
  await page.waitFor('.introduce-pros');
  expect(url).toEqual('http://localhost:3000/');
});
