# 🧪 Playwright Automation – Automation Exercise

This repository contains automated test cases for the [Automation Exercise website](https://automationexercise.com/) using **Playwright** and **TypeScript**.

## Test Cases Included

1. New user registration and login verification  
2. Product search and add to cart flow  
   - Search for a product named **T-shirt**
   - Add first product to cart
   - Verify item is added and total cart price is correct

## Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- [Faker.js](https://fakerjs.dev/) (for generating random user data)

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/kembalsado/automation-exercise.git
cd automation-exercise
```

### 2. Install dependencies

```bash
npm install
```

This installs all necessary packages including:
- `@playwright/test`
- `faker-js/faker`
- `typescript`

### 3. Run the tests

```bash
npx playwright test
```

> To open the HTML report after test run:

```bash
npx playwright show-report
```