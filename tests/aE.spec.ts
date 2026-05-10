import { test } from "../fixtures/aC.fixture"
import { GoToHomePage } from "../flows/goToHomePage.flow";
import { UserLifecycle } from "../flows/userLifecycle.flow";

test.describe("Automation exercise test cases", () => {

    test.beforeEach(async ({page}) => {
        //verify and display home page before each test case
        const goToHomePage = new GoToHomePage(page);
        await goToHomePage.loadAndVerifyContent();
    })

    test("TC01 - Register User", async({ page }) => {
        const userLifecycle = new UserLifecycle(page);
        //register new user - full process with validation of logged user
        await userLifecycle.registerNewUser();
        //delete logged user account with verification after finished action 
        await userLifecycle.deleteUserAcc();
    })
})