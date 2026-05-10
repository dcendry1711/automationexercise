import { test, expect } from "@playwright/test"
import { Navbar } from "../components/navigation.component";
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { SignupPage } from "../pages/signup.page";
import { AccCreatedPage } from "../pages/accCreated.page";
import { AccDeletedPage } from "../pages/accDeleted.page";

test.describe("Automation exercise test cases", () => {

    test("TC01 - Register User", async({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const accCreatedPage = new AccCreatedPage(page);
        const accDeletedPage = new AccDeletedPage(page);
        const navbar = new Navbar(page);

        //verify and display home page, go to login page 
        await page.goto('');
        await homePage.consentBtn.click();
        await expect(homePage.pageHeader).toBeVisible();
        await navbar.signupLoginLink.click();

        //verify display of login page, fill new user registration form and proceed
        await expect(loginPage.newUserSignupHeader).toBeVisible();
        await loginPage.newUserName.fill('10052026_02');
        await loginPage.newUserEmail.fill('10052026_02@test.com');
        await loginPage.signupBtn.click();

        //verify display of signup page, fill account and address information form -> create account
        await expect(signupPage.enterAccInfHeader).toBeVisible();
        await signupPage.mrTitle.check();
        await signupPage.accountPassword.fill('1234');
        await signupPage.dayOfBirth.selectOption('1');
        await signupPage.monthOfBirth.selectOption('1');
        await signupPage.yearOfBirth.selectOption('2000');
        await signupPage.newsletterCheckbox.check();
        await signupPage.specialOffersCheckbox.check();
        await signupPage.userFirstName.fill('TestFirstName');
        await signupPage.userLastName.fill('TestLastName');
        await signupPage.userCompany.fill('TestCompany');
        await signupPage.userAddress.fill('TestAddress');
        await signupPage.userAddress2.fill('TestAddress2');
        await signupPage.userCountry.selectOption('United States');
        await signupPage.userState.fill('TestState');
        await signupPage.userCity.fill('TestCity');
        await signupPage.userZipcode.fill('00001');
        await signupPage.userMobileNumber.fill('+48 111-111-111')
        await signupPage.createAccBtn.click();

        //verify of user account created
        await expect(accCreatedPage.accCreatedHeader).toBeVisible();
        await accCreatedPage.continueBtn.click();

        //verify of logged user in app
        await expect(navbar.loggedInUser).toContainText('10052026_02')

        //delete user account, verification after finished action 
        await navbar.deleteAccLink.click();
        await expect(accDeletedPage.accDeletedHeader).toBeVisible();
        await accDeletedPage.continueBtn.click();
    })
})