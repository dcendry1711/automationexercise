import { Locator, Page } from "@playwright/test"

export class SignupPage{

    //account information locators
    enterAccInfHeader: Locator;
    mrTitle: Locator;
    accountPassword: Locator;
    dayOfBirth: Locator;
    monthOfBirth: Locator;
    yearOfBirth: Locator;
    newsletterCheckbox: Locator;
    specialOffersCheckbox: Locator;

    //address information locators
    userFirstName: Locator;
    userLastName: Locator;
    userCompany: Locator;
    userAddress: Locator;
    userAddress2: Locator;
    userCountry: Locator;
    userState: Locator;
    userCity: Locator;
    userZipcode: Locator;
    userMobileNumber: Locator;
    createAccBtn: Locator;

    constructor(private page: Page){
        this.enterAccInfHeader = page.getByText('Enter Account Information');
        this.mrTitle = page.getByRole('radio', { name: 'Mr.' });
        this.accountPassword = page.getByRole('textbox', { name: 'Password *' });
        this.dayOfBirth = page.locator('#days');
        this.monthOfBirth = page.locator('#months');
        this.yearOfBirth = page.locator('#years');
        this.newsletterCheckbox = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.specialOffersCheckbox = page.getByRole('checkbox', { name: 'Receive special offers from' });
        this.userFirstName = page.getByRole('textbox', { name: 'First name *' });
        this.userLastName = page.getByRole('textbox', { name: 'Last name *' });
        this.userCompany = page.getByRole('textbox', { name: 'Company', exact: true });
        this.userAddress = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.userAddress2 = page.getByRole('textbox', { name: 'Address 2' });
        this.userCountry = page.getByLabel('Country *');
        this.userState = page.getByRole('textbox', { name: 'State *' });
        this.userCity = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.userZipcode = page.locator('#zipcode');
        this.userMobileNumber = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccBtn = page.getByRole('button', { name: 'Create Account' });
    }
}