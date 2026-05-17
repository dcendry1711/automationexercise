import { Locator, Page } from "@playwright/test"

export class PaymentDonePage{

    successMsg: Locator;

    constructor(private page: Page){
        this.successMsg = page.getByText('Congratulations! Your order');
    }
}