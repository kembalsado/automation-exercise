import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyProductInCart() {
    await this.page.waitForSelector('.cart_info');
    const cartItems = this.page.locator('.cart_description');
    await expect(cartItems.first()).toBeVisible();
  }

  async verifyCartTotal() {
    await this.page.waitForSelector('.cart_total');
    const totalPrice = await this.page.locator('.cart_total_price').first().textContent();
    console.log(`Total Price in Cart: ${totalPrice}`);
    expect(totalPrice).not.toBeNull();
  }
}