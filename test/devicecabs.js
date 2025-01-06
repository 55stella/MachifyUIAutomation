import path from "path";
const rootPath = process.cwd();
export default new class DeviceCabs {
  localCabs() {

    return {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--disable-gpu",
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--disable-software-rasterizer",
        ],
      },
      platformName: "Android",
      "appium:deviceName": "Infinix HOT 8",
      "appium:platformVersion": "9",
      "appium:automationName": "UiAutomator2",
      "appium:chromedriverExecutable": path.join(
        rootPath,"test/specs/Resources/chromedriver"
        
      ),
    };
  }

  ciCabs() {
    return {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--headless",
          "--disable-gpu",
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--disable-software-rasterizer",
        ],
      },
    };
  }
}
