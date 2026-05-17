import { Locator, Page } from "@playwright/test"

export class PaymentPage{

    nameOnCard: Locator;
    cardNumber: Locator;
    cvc: Locator;
    expirationMonth: Locator;
    expirationYear: Locator;
    payAndConfirmBtn: Locator;


    constructor(private page: Page){
        this.nameOnCard = page.locator('input[name="name_on_card"]');
        this.cardNumber = page.locator('input[name="card_number"]');
        this.cvc = page.getByRole('textbox', { name: 'ex.' });
        this.expirationMonth = page.getByRole('textbox', { name: 'MM' });
        this.expirationYear = page.getByRole('textbox', { name: 'YYYY' });
        this.payAndConfirmBtn = page.getByRole('button', { name: 'Pay and Confirm Order' });
    }
}