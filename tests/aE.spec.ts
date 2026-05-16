import { expect, test } from "../fixtures/aC.fixture"
import { GoToHomePage } from "../flows/goToHomePage.flow";
import { UserLifecycle } from "../flows/userLifecycle.flow";
import { SubmitContactForm } from "../flows/submitContactForm.flow";

test.describe("Automation exercise test cases", () => {

    test.beforeEach(async ({ page }) => {
        //verify and display home page before each test case
        const goToHomePage = new GoToHomePage(page);
        await goToHomePage.loadAndVerifyContent();
    })

    test("TC01 - Register User", async({ page }) => {
        const userLifecycle = new UserLifecycle(page);
        //register new user - full process with validation of logged user
        await userLifecycle.registerNewUser();
    })

    test("TC02 - Register User and delete registered user account", async({ page }) => {
        const userLifecycle = new UserLifecycle(page);
        //register new user - full process with validation of logged user
        await userLifecycle.registerNewUser();
        //delete logged user account with verification after finished action 
        await userLifecycle.deleteUserAcc();
    })

    test("TC03 - Logout user", async({ page }) => {
        const userLifecycle = new UserLifecycle(page)
        //register new user for test scenario
        await userLifecycle.registerNewUser();
        //logout after register user
        await userLifecycle.logoutUser();
    })

    test("TC04 - Login User with correct email and password", async({ page }) => {
        const userLifecycle = new UserLifecycle(page)
        //register new user for test scenario
        await userLifecycle.registerNewUser();
        //logout after register user
        await userLifecycle.logoutUser();
        //login to system with register user data
        await userLifecycle.loginUser();
    })

    test("TC05 - Login user with incorrect email and password", async({ page }) =>{
        const userLifecycle = new UserLifecycle(page)
        //go to login page and verify display of login page
        await userLifecycle.navigateToLoginPage();
        //login with incorrect user data and verify error message display
        await userLifecycle.loginWithIncorrectUserData();
    })

    test("TC06 - Contact Us Form", async({ page }) => {
        const submitContactForm = new SubmitContactForm(page);
        //proceed full process of submit contact form 
        await submitContactForm.fullProcess();
    })

    test("TC07 - Verify Test Cases Page", async({ page, navbar }) => {
        //navigate to test cases page
        await navbar.testCasesLink.click();
        //verify navigation to test cases page successfully
        expect(page.url()).toContain('/test_cases')
    })

    test("TC08 - Verify all products and product detail page", async({ navbar ,productsPage, productDetailsPage }) => {
        //navigate to products page, verify of navigate to site
        await navbar.productsLink.click();
        await productsPage.verificationPage();
        //verify of products list visibility
        await productsPage.verifyProductsListVisibility();
        //navigate to first product on product list detail page
        await productsPage.view1stProductDetails();
        //verify visibility of product details
        await productDetailsPage.verifyVisibilityOfProductDetails();
    })

    test("TC09 - Search product", async({ navbar , productsPage }) => {
        //navigate to products page with verification
        await navbar.productsLink.click();
        await productsPage.verificationPage();
        //type, search, and verify searching product data
        await productsPage.typeAndSearchAndVerifyProduct();
    })

    test("TC10 - Verify subscription in home page", async({ homePage }) => {
        //verify text subscription on home page footer
        await expect(homePage.footer.footerSubscriptionHeader).toContainText('Subscription');
        //fill, submit subscription form and verify success message after submit
        await homePage.footer.submitSubscriptionWithVerification();
    })

    test("TC11 - Verify subscription in Cart page", async({ navbar, cartPage }) => {
        //navigate to cart page
        await navbar.cartLink.click();
        //verification subscription header in footer section
        await expect(cartPage.footer.footerSubscriptionHeader).toContainText('Subscription');
        //fill, submit subscription form and verify success message after submit
        await cartPage.footer.submitSubscriptionWithVerification();
    })

    test("TC12 - Add Products in Cart", async({ navbar, productsPage, cartPage }) => {
        //navigate to products page
        await navbar.productsLink.click();
        //add 1st product on list to cart
        await productsPage.addProductToCart("1");
        //continue shopping
        await productsPage.continueShoppingLinkModal.click();
        //add 2nd product on list to cart
        await productsPage.addProductToCart("2");
        //go to cart page
        await productsPage.viewCartLinkOnModal.click();
        //verify products added to cart
        await cartPage.verify1stProductInCart();
        await cartPage.verify2ndProductInCart();
    })
})
