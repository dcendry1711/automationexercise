import { Locator, Page, expect } from "@playwright/test"

export class PaymentDonePage{

    successMsg: Locator;

    async verifyDisplaySuccesMsg(){
        await expect(this.successMsg).toContainText('Congratulations! Your order has been confirmed!');
    }

    constructor(private page: Page){
        this.successMsg = page.getByText('Congratulations! Your order');
    }
}