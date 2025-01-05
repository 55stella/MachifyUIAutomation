import Page from "./page.js";
export default new class SignUpPage extends Page{

    get name() {
        return $("#signup-name");
    }
    get age() {
        return $("#signup-age");
    }
    get maleCheckbox() {
        return $("//input[@value='Male']");
    }
    get femaleCheckBox() {
        return $("//input[@value='Female']");
    }
    get location() {
        return $("#signup-location");
    }
    get interest() {
        return $("#signup-interests");
    }
    get profilePictureInput() {
        return $("input[name='profilePicture']");
    }
    get username() {
        return $("#signup-username");
    }
    get password() {
        return $("#signup-password");
    }
    get submitBtn() {
        return $("//button[normalize-space()='Sign Up']");
    }
    get signUpText() {
        return $("//h1[normalize-space()='Sign Up']");
    }
    get successfulSignupMessage() {
        return $("//p[@class='text-green-600']");
    }
    get emptyFieldErrorMessage() {
        return $("//p[normalize-space()='Age is required.']");
    }
    get invalidImageUploadErrorMessage() {
        return $("//p[@class='text-red-500 text-sm']");
    }
    // methods

     async fillCompulsoryInfo(name, age,location, interest,username, password,) {
         await this.sendValue(this.name, name)
         await this.sendValue(this.age, age)
         await this.click(this.femaleCheckBox);
         await this.sendValue(this.location, location)
         await this.sendValue(this.interest, interest)
         await this.sendValue(this.username, username)
         await this.sendValue(this.password, password)
         
     }
    async sendProfilePicture(filepath) {
        await this.sendValue(this.profilePictureInput, filepath)
    }

    async clickSubmitBtn() {
        await this.click(this.submitBtn)
        await this.click(this.submitBtn)
    }
    
    async sendSomeProfileInformation(name,location) {
        await this.sendValue(this.name, name);
        await this.sendValue(this.age, age);
        await this.click(this.femaleCheckBox);
        await this.sendValue(this.location, location);
    }

}

