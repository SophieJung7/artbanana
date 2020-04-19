const Page = require('./helpers/page');
let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000/contactus');
});

afterEach(async () => {
  await page.close();
});

test('Can see contactUs form', async () => {
  const text = await page.getContentsOf('.first-name');
  expect(text).toEqual('이름');
});

test('ContactUs form is submitted', async () => {
  await page.type('.name-input', 'Whatever name');
  await page.type('.email-input', 'test@interviewon.com');
  await page.type('.contents-input', 'Whatever contents');
  await page.click('.btn-submit');
  await page.waitFor('.success-message');
  const text = await page.getContentsOf('.success-message');
  expect(text).toEqual(
    '메시지가 발송되었습니다. 24시간 내로 답변드리겠습니다. 감사합니다^^!'
  );
});

test('Newsletter signup is submitted', async () => {
  await page.type('.subscribe-input', 'test@interviewon.com');
  await page.click('.btn-subscribe');
  await page.waitFor('.thank-you');
  const text = await page.getContentsOf('.thank-you');
  expect(text).toEqual('감사합니다!');
});
