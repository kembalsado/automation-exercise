import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async clickSignupLogin() {
    await this.page.click('a[href="/login"]');
  }

  async isLoggedInAs(name: string) {
    await this.page.waitForSelector(`text=Logged in as ${name}`);
  }

  async logout() {
    await this.page.click('a[href="/logout"]');
  }
}