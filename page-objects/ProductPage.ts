import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.click('a[href="/products"]');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async searchForProduct(query: string) {
    await this.page.fill('#search_product', query);
    await this.page.click('#submit_search');
  }

  async verifySearchResults(query: string) {
    await this.page.waitForSelector('.features_items');
    const results = this.page.locator('.productinfo.text-center p');
    await results.first().waitFor();
    const count = await results.count();
    for (let i = 0; i < count; i++) {
      const text = await results.nth(i).textContent();
      if (!text?.toLowerCase().includes(query.toLowerCase())) {
        throw new Error(`Product result does not match query: ${text}`);
      }
    }
  }

  async addFirstProductToCart() {
    // const firstProduct = this.page.locator('.product-overlay').first();
    await this.page.hover('.product-image-wrapper >> nth=0');
    await this.page.locator('.add-to-cart >> nth=0').click();
    await this.page.waitForSelector('#cartModal', { state: 'visible' });
    await this.page.click('#cartModal a[href="/view_cart"]', { timeout: 5000 });
  }
}