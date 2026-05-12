import { Page } from "@playwright/test";
import { Navbar } from "../components/navigation.component";
import { ContactUsPage } from "../pages/contactUs.page";
import { HomePage } from "../pages/home.page";


export class SubmitContactForm{

    navbar: Navbar;
    contactUsPage: ContactUsPage;
    homePage: HomePage;

    async fullProcess(){
        await this.contactUsPage.navigateToContactUsPage();
        await this.contactUsPage.fillContactForm();
        await this.contactUsPage.submitContactForm();
        await this.contactUsPage.verifySuccessMsgAndNavigateHome();
    }

    constructor (private page: Page){
        this.navbar = new Navbar(page);
        this.contactUsPage = new ContactUsPage(page);
        this.homePage = new HomePage(page);
    }
}