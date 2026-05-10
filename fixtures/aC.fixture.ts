import { test as base } from "@playwright/test"
import { Navbar } from "../components/navigation.component"
import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { SignupPage } from "../pages/signup.page";
import { AccCreatedPage } from "../pages/accCreated.page";
import { AccDeletedPage } from "../pages/accDeleted.page";

type AcFixture = {
    navbar: Navbar;
    homePage: HomePage;
    loginPage: LoginPage
    signupPage: SignupPage;
    accCreatedPage: AccCreatedPage;
    accDeletedPage: AccDeletedPage;
}

export const test = base.extend<AcFixture>({
    navbar: async({ page }, use ) => {
        await use(new Navbar(page));
    },
    homePage: async({ page }, use ) => {
        await use(new HomePage(page));
    },
    loginPage: async({ page }, use ) => {
        await use(new LoginPage(page));
    },
    signupPage: async({ page }, use ) => {
        await use(new SignupPage(page));
    },
    accCreatedPage: async({ page }, use ) => {
        await use(new AccCreatedPage(page));
    },
    accDeletedPage: async({ page }, use ) => {
        await use(new AccDeletedPage(page));
    }
})

export { expect } from "@playwright/test"