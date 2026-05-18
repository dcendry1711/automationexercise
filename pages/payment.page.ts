import { Locator, Page } from "@playwright/test"
import { userAccInfoForm } from "../data/userAccInfoForm.data";

export class PaymentPage{

    nameOnCard: Locator;
    cardNumber: Locator;
    cvc: Locator;
    expirationMonth: Locator;
    expirationYear: Locator;
    payAndConfirmBtn: Locator;

    async fillPaymentInformation(){
        await this.nameOnCard.waitFor({ state: 'visible', timeout: 60000 });
        await this.nameOnCard.fill(`${userAccInfoForm.firstName} ${userAccInfoForm.lastName}`);
        await this.cardNumber.fill('1111111111111111');
        await this.cvc.fill('111');
        await this.expirationMonth.fill('12');
        await this.expirationYear.fill('2099');
    }


    constructor(private page: Page){
        this.nameOnCard = page.locator('input[name="name_on_card"]');
        this.cardNumber = page.locator('input[name="card_number"]');
        this.cvc = page.getByRole('textbox', { name: 'ex.' });
        this.expirationMonth = page.getByRole('textbox', { name: 'MM' });
        this.expirationYear = page.getByRole('textbox', { name: 'YYYY' });
        this.payAndConfirmBtn = page.getByRole('button', { name: 'Pay and Confirm Order' });
    }
}