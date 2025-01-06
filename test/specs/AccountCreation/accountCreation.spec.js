import login from "../../pageobjects/login.page.js"
import signUpPage from "../../pageobjects/signup.page.js"
import testBase from "../testbase.js";
import { profileCreationTestData } from "../utils/testdata.js";
import path from "path";
const rootPath = process.cwd();
describe('Account Creation', () => {
    const url = "https://machifywebsite.netlify.app/";
    const successMessage = "Sign-Up Successful! Please log in.";
    it('verify that the user can navigate to the signup screen successfully' , async() => {
        await login.open(url)
        await login.clickSignupBtn()
        await testBase.waitForElementVisibility(signUpPage.signUpText, 400);
        await testBase.validateText(signUpPage.signUpText, "Sign Up");
    })
    it('verify that the user cannot proceed without filling mandatory fields', async() => {
      await signUpPage.clickSubmitBtn()
      await testBase.validateText(signUpPage.emptyFieldErrorMessage, "required.")
    })
    it('verify that the user can fill in the mandatory fields successfully', async () => {
        const userDetails = profileCreationTestData.userDetails
        await signUpPage.fillCompulsoryInfo(userDetails.name,userDetails.age,
        userDetails.location,userDetails.Interests, userDetails.username, userDetails.password)
    })
  it("verify that profile image is not a mandatory field ", async () => {
      await signUpPage.clickSubmitBtn()
      await testBase.validateText(signUpPage.successfulSignupMessage, successMessage)
      
    });
  it('Verify that the user cannot proceed with Invalid picture format',async() => {
      await signUpPage.sendProfilePicture(
        `${path.join(rootPath, "test/specs/Resources/InvalidImageFormat.csv")}`
      );
      await signUpPage.clickSubmitBtn();
      await testBase.validateText(signUpPage.invalidImageUploadErrorMessage, "Invalid file type. Use JPEG or PNG")  
    })
  it("verify that the user can Profile Picture successfully", async () => {
      await signUpPage.sendProfilePicture(
        `${path.join(rootPath, "test/specs/Resources/profilepicture.jpg")}`
      );
    });
    it('verify that the user can submit profile creation form and successMessage is displayed', async () => {
        await testBase.waitForElementVisibility(signUpPage.submitBtn, 3000)
        await signUpPage.clickSubmitBtn()
        await testBase.validateText(signUpPage.successfulSignupMessage, successMessage)
    })
    
    
})