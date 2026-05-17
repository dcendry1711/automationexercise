import { Locator, Page } from "@playwright/test"

export class PurchaseModal{

    viewCartLinkOnModal: Locator;
    continueShoppingLinkModal: Locator;

    constructor(private page: Page){
        this.viewCartLinkOnModal = page.locator('.modal-content a');
        this.continueShoppingLinkModal = page.locator('.modal-footer button');
    }
}