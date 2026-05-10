import { Locator, Page } from "@playwright/test"

export class HomePage{

    consentBtn: Locator;
    pageHeader: Locator;

    constructor(private page: Page){
        this.consentBtn = page.locator('p.fc-button-label', {hasText: 'Consent'});
        this.pageHeader = page.locator('div').first();
    }
}