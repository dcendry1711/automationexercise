import { Locator, Page } from "@playwright/test"

export class AccCreatedPage{

    accCreatedHeader: Locator;
    continueBtn: Locator;

    constructor(private page: Page){
        this.accCreatedHeader = page.getByText('Account Created!');
        this.continueBtn = page.getByRole('link', { name: 'Continue' });
    }
}