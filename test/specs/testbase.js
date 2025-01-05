import { expect } from '@wdio/globals'


export default new (class TestBase {
  // Reusable methods

  async validateText(webElement, text) {
    const elementText = await webElement.getText();
    await expect(elementText).toContain(text);
  }
  async waitForElementVisibility(elem, time) {
    await elem.waitForDisplayed({ timeout: time });
  }
  async scroll() {
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    ); // the numbers can be replaced with texts
  }
})();

