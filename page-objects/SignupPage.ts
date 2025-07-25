import { Page } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async enterNameAndEmail(name: string, email: string) {
    await this.page.fill('input[data-qa="signup-name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.click('button[data-qa="signup-button"]');
  }

  async fillDetails(password: string) {
    await this.page.check('#id_gender1');
    await this.page.fill('#password', password);
    await this.page.selectOption('#days', '10');
    await this.page.selectOption('#months', '10');
    await this.page.selectOption('#years', '1990');
    await this.page.check('#newsletter');
    await this.page.check('#optin');
  }

  async fillAddressDetails() {
    await this.page.fill('#first_name', 'John');
    await this.page.fill('#last_name', 'Doe');
    await this.page.fill('#address1', '123 Test Street');
    await this.page.selectOption('#country', 'Canada');
    await this.page.fill('#state', 'Ontario');
    await this.page.fill('#city', 'Toronto');
    await this.page.fill('#zipcode', 'M4B1B3');
    await this.page.fill('#mobile_number', '1234567890');
  }

  async createAccount() {
    await this.page.click('button[data-qa="create-account"]');
    await this.page.waitForSelector('h2:has-text("Account Created!")');
    await this.page.click('a[data-qa="continue-button"]');
  }
}