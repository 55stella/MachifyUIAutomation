import Page from "./page";

export default class SignUpPage extends Page{

    get name() {
        return $("#signup-name");
    }
    get age() {
        return $("#signup-age");
    }
    get maleCheckbox() {
        return $("input[value='Male']");
    }
    get femaleCheckBox() {
        return $("input[value='Female']");
    }
    get location() {
        return $("#signup-location");
    }
    get interest() {
        return $("#signup-interests");
    }
    get profilePicture() {
        return $("input[name='profilePicture']");
    }
    get userName() {
        return $("#signup-username");
    }
    get password() {
        return $("#signup-password");
    }
    get submitBtn() {
        return $("button[type='submit']");
    }


    // methods
    

}

