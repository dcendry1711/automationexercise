import { Locator, Page } from "@playwright/test"

export class Modal{

    viewCartLinkOnModal: Locator;
    continueShoppingLinkModal: Locator;
    registerLoginLinkOnModal: Locator;

    constructor(private page: Page){
        this.viewCartLinkOnModal = page.locator('.modal-content a');
        this.continueShoppingLinkModal = page.locator('.modal-footer button');
        this.registerLoginLinkOnModal = page.getByRole('link', { name: 'Register / Login' });
    }
}