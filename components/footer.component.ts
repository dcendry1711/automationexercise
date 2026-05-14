import { Locator, Page, expect } from "@playwright/test"

export class Footer{

    footerSubscriptionHeader: Locator;
    subscriptionEmailInput: Locator;
    submitSubscriptionBtn: Locator;
    successSubscriptionMsg: Locator;

      async submitSubscriptionWithVerification(){
        await this.subscriptionEmailInput.fill('test@test.com');
        await this.submitSubscriptionBtn.click();
        await expect(this.successSubscriptionMsg).toContainText('You have been successfully subscribed!');
    }

    constructor(private page: Page) {
        this.footerSubscriptionHeader = page.locator('.single-widget h2');
        this.subscriptionEmailInput = page.locator('#susbscribe_email');
        this.submitSubscriptionBtn = page.locator('#subscribe');
        this.successSubscriptionMsg = page.getByText('You have been successfully');
    }
}