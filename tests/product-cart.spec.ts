import { test } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { ProductPage } from '../page-objects/ProductPage';
import { CartPage } from '../page-objects/CartPage';

test('Product search and add to cart flow', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await test.step('Go to homepage and navigate to Products page', async () => {
    await homePage.goto();
    await productPage.goto();
  });

  await test.step('Search for a specific product "T-shirt"', async () => {
    const query = 'T-shirt';
    await productPage.searchForProduct(query);
    await productPage.verifySearchResults(query);
  });

  await test.step('Add the first product to cart', async () => {
    await productPage.addFirstProductToCart();
  });

  await test.step('Verify product is in cart and total is correct', async () => {
    await cartPage.verifyProductInCart();
    await cartPage.verifyCartTotal();
  });

});