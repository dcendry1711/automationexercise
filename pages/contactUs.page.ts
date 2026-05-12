import { Locator, Page, expect } from "@playwright/test"
import { Navbar } from "../components/navigation.component";
import { HomePage } from "./home.page";

export class ContactUsPage {

    navbar: Navbar;
    homePage: HomePage;
    contactPageHeader: Locator;
    nameInput: Locator;
    emailInput: Locator;
    subjectInput: Locator;
    messageInput: Locator;
    importFileBtn: Locator;
    submitBtn: Locator;
    successMsg: Locator;
    homeBtn: Locator;

    async navigateToContactUsPage(){
        //navigate to contact us page, verification page header
        await this.navbar.contactUsLink.click();
        await expect(this.contactPageHeader).toBeVisible();
    }

    async fillContactForm(){
        //fill contact form
        await this.nameInput.fill('Daniel');
        await this.emailInput.fill('test@test.com');
        await this.subjectInput.fill('test subject');
        await this.messageInput.fill('test message');
        await this.importFileBtn.setInputFiles('testImportFile.txt');
    }

    async submitContactForm(){
        //submit contact form
        this.page.once("dialog", async dialog => await dialog.accept());
        await this.submitBtn.click();
    }

    async verifySuccessMsgAndNavigateHome(){
        //verify display of success message
        await expect(this.successMsg).toBeVisible();    
        //back to home page with verification of dom content loaded
        await this.homeBtn.click();
        await expect(this.homePage.pageHeader).toBeVisible();
    }

    constructor(private page: Page) {
        this.navbar = new Navbar(page);
        this.homePage = new HomePage(page);
        this.contactPageHeader = page.getByRole('heading', { name: 'Get In Touch' });
        this.nameInput = page.getByRole('textbox', { name: 'Name' });
        this.emailInput = page.getByRole('textbox', { name: 'Email', exact: true });
        this.subjectInput = page.getByRole('textbox', { name: 'Subject' });
        this.messageInput = page.getByRole('textbox', { name: 'Your Message Here' });
        this.importFileBtn = page.getByRole('button', { name: 'Choose File' });
        this.submitBtn = page.getByRole('button', { name: 'Submit' });
        this.successMsg = page.locator('#contact-page').getByText('Success! Your details have');
        this.homeBtn = page.getByRole('link', { name: ' Home' });
    }
}