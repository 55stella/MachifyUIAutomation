import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        return browser.url(`https://machifywebsite.netlify.app/`);
    }
    async click(ele) {
        await ele.click()
    }
    async sendValue(webElement, value) {
        await webElement.setValue(value)
    }
    async doubleClick(webElement) {
        await webElement.doubleClick()
    }
}
