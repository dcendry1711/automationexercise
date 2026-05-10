import { Locator, Page } from "@playwright/test"

export class AccDeletedPage{

    accDeletedHeader: Locator;
    continueBtn: Locator;

    constructor(private page: Page){
        this.accDeletedHeader = page.getByText('Account Deleted!');
        this.continueBtn = page.getByRole('link', { name: 'Continue' });
    }
}