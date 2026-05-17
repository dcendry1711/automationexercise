import { Page, expect} from "@playwright/test"
import { Navbar } from "../components/navigation.component"
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { SignupPage } from "../pages/signup.page";
import { AccCreatedPage } from "../pages/accCreated.page";
import { AccDeletedPage } from "../pages/accDeleted.page";
import { generateNewUserData } from "../utils/generateNewUserData.util";
import { userAccInfoForm } from "../data/userAccInfoForm.data";
import { usersArr } from "../utils/generateNewUserData.util";

export class UserLifecycle{

    navbar: Navbar;
    homePage: HomePage;
    loginPage: LoginPage;
    signupPage: SignupPage;
    accCreatedPage: AccCreatedPage;
    accDeletedPage: AccDeletedPage;

    //asynchrous function - regiter new user
    async registerNewUser(){

        //generate new user name and email
        generateNewUserData()
        
        //verify display of login page, fill new user registration form and proceed
        await expect(this.loginPage.newUserSignupHeader).toBeVisible();
        await this.loginPage.newUserName.fill(usersArr[0].userName);
        await this.loginPage.newUserEmail.fill(usersArr[0].userEmail);
        await this.loginPage.signupBtn.click();

        //verify display of signup page, fill account and address information form -> create account
        await expect(this.signupPage.enterAccInfHeader).toBeVisible();
        await this.signupPage.mrTitle.check();
        await this.signupPage.accountPassword.fill(usersArr[0].userPassword);
        await this.signupPage.dayOfBirth.selectOption(userAccInfoForm.dayOfBirth);
        await this.signupPage.monthOfBirth.selectOption(userAccInfoForm.monthOfBirth);
        await this.signupPage.yearOfBirth.selectOption(userAccInfoForm.yearOfBirth);
        await this.signupPage.newsletterCheckbox.check();
        await this.signupPage.specialOffersCheckbox.check();
        await this.signupPage.userFirstName.fill(userAccInfoForm.firstName);
        await this.signupPage.userLastName.fill(userAccInfoForm.lastName);
        await this.signupPage.userCompany.fill(userAccInfoForm.company);
        await this.signupPage.userAddress.fill(userAccInfoForm.address);
        await this.signupPage.userAddress2.fill(userAccInfoForm.address2);
        await this.signupPage.userCountry.selectOption(userAccInfoForm.country);
        await this.signupPage.userState.fill(userAccInfoForm.state);
        await this.signupPage.userCity.fill(userAccInfoForm.city);
        await this.signupPage.userZipcode.fill(userAccInfoForm.zipcode);
        await this.signupPage.userMobileNumber.fill(userAccInfoForm.mobileNumber)
        await this.signupPage.createAccBtn.click();

        //verify of user account created
        await expect(this.accCreatedPage.accCreatedHeader).toBeVisible();
        await this.accCreatedPage.continueBtn.click();

        //verify of logged user in app
        await expect(this.navbar.loggedInUser).toContainText(usersArr[0].userName)
    }

    //asynchrous function - delete user account 
    async deleteUserAcc(){
        await this.navbar.deleteAccLink.click();
        await expect(this.accDeletedPage.accDeletedHeader).toBeVisible();
        await this.accDeletedPage.continueBtn.click();
    }

    async logoutUser(){
        await this.navbar.logoutLink.click();
        await expect(this.navbar.loggedInUser).toBeHidden();
        await expect(this.homePage.pageHeader).toBeVisible();
    }

    async loginUser(){
        await this.navbar.signupLoginLink.click();
        await expect(this.loginPage.loginUserHeader).toBeVisible();
        await this.loginPage.loginEmail.fill(usersArr[0].userEmail);
        await this.loginPage.loginPassword.fill(usersArr[0].userPassword);
        await this.loginPage.loginBtn.click();
        await expect(this.navbar.loggedInUser).toContainText(usersArr[0].userName);
    }

    async navigateToLoginPage(){
        await this.navbar.signupLoginLink.click();
        await expect(this.loginPage.loginUserHeader).toBeVisible();
    }

    async loginWithIncorrectUserData(){
        const wrongEmail = 'wrongEmail@test.com';
        const wrongPassword = 'wrongPassword';

        await this.loginPage.loginEmail.fill(wrongEmail);
        await this.loginPage.loginPassword.fill(wrongPassword);
        await this.loginPage.loginBtn.click();

        await expect(this.loginPage.loginErrMsg).toBeVisible();
    }

    constructor(private page: Page){
        this.navbar = new Navbar(page);
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.signupPage = new SignupPage(page);
        this.accCreatedPage = new AccCreatedPage(page);
        this.accDeletedPage = new AccDeletedPage(page);
    }
}