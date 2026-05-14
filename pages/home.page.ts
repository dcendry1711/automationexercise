import { Locator, Page, expect } from "@playwright/test"
import { Footer } from "../components/footer.component";

export class HomePage{

    footer: Footer;
    consentBtn: Locator;
    pageHeader: Locator;

    constructor(private page: Page){
        this.footer = new Footer(page);
        this.consentBtn = page.locator('p.fc-button-label', {hasText: 'Consent'});
        this.pageHeader = page.locator('div').first();
    }
}