const timeout = 5000;

describe('/ (Home Page)', () => {
    let page;

    beforeAll(async () => {
      page = await global.__BROWSER__.newPage();
      await page.goto('http://localhost:3000');
    }, timeout);

    it('(F01) Should provide quick form', async () => {
      const form = await page.$eval('[data-marker="quick-form"]', f => f.innerText);
      expect(form).toContain('Quick Form');
    });

    it('(F02) Should provide full form', async () => {
      const form = await page.$eval('[data-marker="full-form"]', f => f.innerText);
      expect(form).toContain('Full Form');
    });
});
