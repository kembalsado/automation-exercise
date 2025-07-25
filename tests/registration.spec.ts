import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { HomePage } from '../page-objects/HomePage';
import { SignupPage } from '../page-objects/SignupPage';
import { LoginPage } from '../page-objects/LoginPage';

test('New user registration and login verification', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const loginPage = new LoginPage(page);

  const name = faker.person.firstName();
  const email = faker.internet.email();
  const password = 'Test1234!';

  await test.step('Navigate to homepage and click Signup/Login', async () => {
    await homePage.goto();
    await homePage.clickSignupLogin();
  });

  await test.step('Register a user using a generated faker data', async () => {
    await signupPage.enterNameAndEmail(name, email);
    await signupPage.fillDetails(password);
    await signupPage.fillAddressDetails();
    await signupPage.createAccount();
  });
  
  await test.step('Verify user is logged in', async () => {
    await homePage.isLoggedInAs(name);
  });

  await test.step('Logout the user', async () => {
    await homePage.logout();
  });

  await test.step('Login with the same user credentials', async () => {
    await homePage.clickSignupLogin();
    await loginPage.login(email, password);
  });

  await test.step('Verify user is logged in after login', async () => {
  await homePage.isLoggedInAs(name);
  });
  
});