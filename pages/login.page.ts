import { Locator, Page } from "@playwright/test"

export class LoginPage{

    //new user locators on login page
    newUserSignupHeader: Locator;
    newUserName: Locator;
    newUserEmail: Locator;
    signupBtn: Locator;

    //login user locators on login page
    loginUserHeader: Locator;
    loginEmail: Locator;
    loginPassword: Locator;
    loginBtn: Locator;
    loginErrMsg: Locator;

    async loginWithIncorrectData(){
        const wrongEmail = 'wrongEmail@test.com';
        const wrongPassword = 'wrongPassword';

        await this.loginEmail.fill(wrongEmail);
        await this.loginPassword.fill(wrongPassword);
        await this.loginBtn.click();
    }

    constructor(private page: Page){
        this.newUserSignupHeader = page.getByRole('heading', { name: 'New User Signup!' });
        this.newUserName = page.getByRole('textbox', { name: 'Name' });
        this.newUserEmail = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupBtn = page.getByRole('button', { name: 'Signup' });
        this.loginUserHeader = page.getByRole('heading', { name: 'Login to your account' });
        this.loginEmail = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.loginPassword = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.loginErrMsg = page.getByText('Your email or password is');
    }
}