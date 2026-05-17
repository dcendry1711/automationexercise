import { expect, Page } from "@playwright/test"
import { HomePage } from "../pages/home.page"

export class GoToHomePage{

    homePage: HomePage;

    async loadAndVerifyContent(){
        await this.page.goto('');
        
        // Próba kliknięcia przycisku zgody, jeśli jest widoczny
        try {
            await this.homePage.consentBtn.waitFor({ state: 'visible', timeout: 5000 });
            await this.homePage.consentBtn.click();
        } catch (e) {
            console.log('Przycisk zgody nie pojawił się, pomijam kliknięcie.');
        }

        await expect(this.homePage.pageHeader).toBeVisible();
    }

    constructor(private page: Page){
        this.homePage = new HomePage(page);
    }
}