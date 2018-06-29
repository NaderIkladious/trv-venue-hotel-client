const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:4001/');
  page.setViewport({ width: 1000, height: 2000 });
});

describe('Trivago Venue Tests', () => {
  test('Landing Page have 6 Hotels', async () => {
    const hotels = await page.$$('.hotel-item');
    expect(hotels.length >= 6).toBe(true);
  });
  test('Redirect to Hotel Detail Page', async () => {
    await page.click('.hotel-item .hotel-item-link');
    expect(page.url()).toContain('/hotels');
  });
  test('Finding at least 2 Hotels', async () => {
    const rooms = await page.$$('.room-item');
    const roomNumber = rooms.length >= 2 ? true : false;
    expect(roomNumber).toBe(true);
  });

  test('Navigate Confirmation Page', async () => {
    await page.click('.room-list li:nth-child(2) .room-item .room-reserve');
    expect(page.url()).toContain('/confirmation');
  });

  test('Find Confirmation ID and User First and Last name', async () => {
    const confirmation = await page.$eval('.confirmation-id', e => e.innerHTML);
    expect(confirmation.split('-').length).toBe(5);
    const fName = await page.$eval('.first-name', e => e.innerHTML);
    expect(fName).toContain('John');
    const lName = await page.$eval('.last-name', e => e.innerHTML);
    expect(lName).toContain('Doe');
  });
});

afterAll(() => {
  browser.close();
});
