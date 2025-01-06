# Machify UI Automation

This repository contains the UI automation suite for the Machify project, leveraging WebdriverIO for testing the frontend of the application.

## Project Structure

```
MachifyUIAutomation/
|-- src/
|   |-- pageobjects/
|   |   |-- login.page.js
|   |   |-- signup.page.js
|   |   |-- page.js
|-- test/
|   |-- specs/
|   |   |-- accountcreation.spec.js
|   |-- utils/
|   |   |-- testdata.js
|   |-- testbase.js
|-- wdio.conf.js
|-- package.json
|-- README.md
```

### Directory Descriptions
- `src/pageobjects/`: Contains Page Object classes such as `LoginPage` and `SignUpPage`. These classes encapsulate the selectors and methods for interacting with specific pages in the application.
- `test/specs/`: Contains test specifications. Each test spec corresponds to a feature or functionality being tested.
- `test/utils/`: Contains utility files like `testdata.js` which provide data for test cases.
- `test/testbase.js`: Contains common methods and utilities used across test cases.
- `wdio.conf.js`: WebdriverIO configuration file for setting up and running the tests.

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js (v20 or later)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/55stella/MachifyUIAutomation.git
   cd MachifyUIAutomation
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory with the following content:
```
USERNAME='stella1'
PASSWORD='Password1@'
RUN_LOCAL='true'
```

## Running the Tests

### Running Locally
To run the tests locally, execute:
```bash
npm run wdio
```

### Generating Allure Reports
After running tests, generate the Allure report:
```bash
allure generate --clean allure-results
```

## GitHub Actions CI/CD
This project is set up with a GitHub Actions workflow to run tests on every push or pull request to the `main` branch.

### Workflow File: `.github/workflows/ci.yml`
```yaml
name: Frontend Tests CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      USERNAME: 'stella1'
      PASSWORD: 'Password1@'
      RUN_LOCAL: 'false'
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Install Allure Command Line
        run: npm install -g allure-commandline --save-dev

      - name: Run frontend tests
        run: npm run wdio
        continue-on-error: true

      - name: Generate Allure report
        run: allure generate --clean allure-results
        if: always()

      - name: Upload Allure report as artifact
        uses: actions/upload-artifact@v4
        with:
          name: allure-report
          path: allure-report
        if: always()
```

## Test Details

### Account Creation Tests (`accountcreation.spec.js`)

This test suite verifies the account creation functionality of the Machify application. Key test scenarios include:

- Navigating to the signup screen.
- Ensuring mandatory fields must be filled before submission.
- Successfully filling in the mandatory fields.
- Handling optional fields like profile picture.
- Validating error messages for invalid input.

Example test case:
```javascript
describe('Account Creation', () => {
    const url = "https://machifywebsite.netlify.app/";
    const successMessage = "Sign-Up Successful! Please log in.";

    it('verify that the user can navigate to the signup screen successfully', async() => {
        await login.open(url);
        await login.clickSignupBtn();
        await testBase.waitForElementVisibility(signUpPage.signUpText, 400);
        await testBase.validateText(signUpPage.signUpText, "Sign Up");
    });

    // More test cases...
});
```
