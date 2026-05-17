import { Locator, Page, expect } from "@playwright/test"
import { Footer } from "../components/footer.component";

export class HomePage{

    footer: Footer;
    consentBtn: Locator;
    pageHeader: Locator;

    getProductLocatorOnHomePage(productNumber: string){
        return this.page.locator(`a[href="/product_details/${productNumber}"]`)
    }

    async viewProductDetailsOnHomePage(productNumber: string){
        const selectedProduct = this.getProductLocatorOnHomePage(productNumber);
        await selectedProduct.click();
        expect(this.page.url()).toContain(`/product_details/${productNumber}`);
    }

    constructor(private page: Page){
        this.footer = new Footer(page);
        this.consentBtn = page.locator('p.fc-button-label', {hasText: 'Consent'});
        this.pageHeader = page.locator('div').first();
    }
}