import { expect, test } from "../fixtures/aC.fixture"
import { GoToHomePage } from "../flows/goToHomePage.flow";
import { UserLifecycle } from "../flows/userLifecycle.flow";

test.describe("Automation exercise test cases", () => {

    test.beforeEach(async ({ page }) => {
        //verify and display home page before each test case
        const goToHomePage = new GoToHomePage(page);
        await goToHomePage.loadAndVerifyContent();
    })

    test("TC01 - Register User", async({ page }) => {
        const userLifecycle = new UserLifecycle(page);
        //register new user - full process with validation of logged user
        await userLifecycle.registerNewUser();
    })

    test("TC02 - Register User and delete registered user account", async({ page }) => {
        const userLifecycle = new UserLifecycle(page);
        //register new user - full process with validation of logged user
        await userLifecycle.registerNewUser();
        //delete logged user account with verification after finished action 
        await userLifecycle.deleteUserAcc();
    })

    test("TC03 - Logout user", async({ page }) => {
        const userLifecycle = new UserLifecycle(page)
        //register new user for test scenario
        await userLifecycle.registerNewUser();
        //logout after register user
        await userLifecycle.logoutUser();
    })

    test("TC04 - Login User with correct email and password", async({ page }) => {
        const userLifecycle = new UserLifecycle(page)
        //register new user for test scenario
        await userLifecycle.registerNewUser();
        //logout after register user
        await userLifecycle.logoutUser();
        //login to system with register user data
        await userLifecycle.loginUser();
    })

    test("TC05 - Login user with incorrect email and password", async({ page }) =>{
        const userLifecycle = new UserLifecycle(page)
        //go to login page and verify display of login page
        await userLifecycle.navbar.signupLoginLink.click();
        await expect(userLifecycle.loginPage.loginUserHeader).toBeVisible();
        //login with incorrect user data and verify error message display
        await userLifecycle.loginPage.loginWithIncorrectData();
        await expect(userLifecycle.loginPage.loginErrMsg).toBeVisible();
    })
})