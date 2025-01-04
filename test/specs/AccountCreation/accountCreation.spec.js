import login from "../../pageobjects/login.page.js"
import signUpPage from "../../pageobjects/signup.page.js"
import testBase from "../testbase.js";
import { profileCreationTestData } from "../utils/testdata.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
describe('Account Creation', () => {
    const url = "https://machifywebsite.netlify.app/";
    const successMessage = "Sign-Up Successful! Please log in.";
    it('verify that the user can navigate to the signup screen successfully' , async() => {
        await login.open(url)
        await login.clickSignupBtn()
        await testBase.waitForElementVisibility(signUpPage.signUpText, 400);
        await testBase.validateText(signUpPage.signUpText, "Sign Up");
    })
    it("verify that the user can upload image successfully", async () => {
      await signUpPage.sendProfilePicture(
        `${path.join(__dirname, "test/specs/Resources/profilepicture.jpg")}`
      );
    });
    it('verify that the user can fill in the mandatory fields successfully', async () => {
        const userDetails = profileCreationTestData.userDetails
        await signUpPage.fillCompulsoryInfo(userDetails.name,userDetails.age,
        userDetails.location,userDetails.Interests, userDetails.username, userDetails.password)
    })
    it('verify that the user can submit form and successMessage is displayed', async () => {
        await testBase.waitForElementVisibility(signUpPage.submitBtn, 3000)
        await signUpPage.clickSubmitBtn()
        await testBase.validateText(signUpPage.successfulSignupMessage, successMessage)
    })
    it("verify that profile image is not a mandatory field ", async () => {
        
    });
    it('Verify that the user cannot proceed with Invalid picture format',async() => {
        
    })
    it('verify that the user cannot proceed without filling mandatory fields', () => {
        
    })
    it('verify that the age must be a digit and error message is displayed otherwise',() => {
        
    })
    

})