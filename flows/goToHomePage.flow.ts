import { expect, Page } from "@playwright/test"
import { HomePage } from "../pages/home.page"

export class GoToHomePage{

    homePage: HomePage;

    async loadAndVerifyContent(){
        await this.page.goto('');
        await this.homePage.consentBtn.click();
        await expect(this.homePage.pageHeader).toBeVisible();
    }

    constructor(private page: Page){
        this.homePage = new HomePage(page);
    }
}