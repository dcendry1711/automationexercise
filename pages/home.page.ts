import { Locator, Page, expect } from "@playwright/test"
import { Footer } from "../components/footer.component";
import { Modal } from "../components/modal.component";

export class HomePage{

    purchaseModal: Modal;
    footer: Footer;
    consentBtn: Locator;
    pageHeader: Locator;

    getProductDetailsLocatorOnHomePage(productNumber: string){
        return this.page.locator(`a[href="/product_details/${productNumber}"]`)
    }

    async viewProductDetailsOnHomePage(productNumber: string){
        const selectedProduct = this.getProductDetailsLocatorOnHomePage(productNumber);
        await selectedProduct.click();
        expect(this.page.url()).toContain(`/product_details/${productNumber}`);
    }

    getProductLocatorToOrderOnHomePage(productId: string){
        return this.page.locator(`a[data-product-id="${productId}"]`);
    }

    async addProductToCartOnHomePage(productId: string){
        const prodLocator = this.getProductLocatorToOrderOnHomePage(productId).first();
        await prodLocator.click();
    }

    constructor(private page: Page){
        this.purchaseModal = new Modal(page);
        this.footer = new Footer(page);
        this.consentBtn = page.locator('p.fc-button-label', {hasText: 'Consent'});
        this.pageHeader = page.locator('div').first();
    }
}