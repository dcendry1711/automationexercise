import { Locator, Page } from "@playwright/test"

export class LoginPage{

    newUserSignupHeader: Locator;
    newUserName: Locator;
    newUserEmail: Locator;
    signupBtn: Locator;

    constructor(private page: Page){
        this.newUserSignupHeader = page.getByRole('heading', { name: 'New User Signup!' });
        this.newUserName = page.getByRole('textbox', { name: 'Name' });
        this.newUserEmail = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupBtn = page.getByRole('button', { name: 'Signup' });
    }
}