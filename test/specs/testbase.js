import { expect } from '@wdio/globals'


export default new class TestBase {
  // Reusable methods

  async validateText(webElement, text) {
    const elementText = await webElement.getText()
    await expect(elementText).toContain(text);
  }
   async waitForElementVisibility(elem, time) {
    await elem.waitForDisplayed({ timeout: time });
  }
}

