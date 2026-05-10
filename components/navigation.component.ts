import { Locator, Page } from "@playwright/test";

export class Navbar {
  homeLink: Locator;
  productsLink: Locator;
  cartLink: Locator;
  signupLoginLink: Locator;
  testCasesLink: Locator;
  apiTestingLink: Locator;
  videoTutorialsLink: Locator;
  contactUsLink: Locator;
  logoutLink: Locator;
  deleteAccLink: Locator;
  loggedInUser: Locator;


  constructor(private page: Page) {
    this.homeLink = page.getByRole("link", { name: " Home" });
    this.productsLink = page.getByRole("link", { name: " Products" });
    this.cartLink = page.getByRole("link", { name: " Cart" });
    this.signupLoginLink = page.getByRole("link", { name: " Signup / Login" });
    this.testCasesLink = page.getByRole("link", { name: " Test Cases" });
    this.apiTestingLink = page.getByRole("link", { name: " API Testing" });
    this.videoTutorialsLink = page.getByRole("link", {name: " Video Tutorials"});
    this.contactUsLink = page.getByRole("link", { name: " Contact us" });
    this.logoutLink = page.getByRole('link', { name: ' Logout' });
    this.deleteAccLink = page.getByRole('link', { name: ' Delete Account' });
    this.loggedInUser = page.getByText('Logged in as');
  }
}
