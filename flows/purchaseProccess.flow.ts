import { Page } from "@playwright/test"
import { HomePage } from "../pages/home.page"
import { CartPage } from "../pages/cart.page"
import { CheckoutPage } from "../pages/checkout.page"
import { PaymentPage } from "../pages/payment.page"
import { PaymentDonePage } from "../pages/paymentDone.page"

export class PurchaseProcess{

    homePage: HomePage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    paymentPage: PaymentPage;
    paymentDonePage: PaymentDonePage;

    async purchaseProcessWithRegisterWhileCheckoutPt1(){
        await this.homePage.addProductsToCart();
        //move to cart page
        await this.homePage.moveToCartPage();
        //proceed to checkout from cart page
        await this.cartPage.proceedToCheckoutBtn.click();
        //begin of new user register path
        await this.cartPage.modal.registerLoginLinkOnModal.click();
    }

    async purchaseProcessWithRegisterWhileCheckoutPt2(){
        await this.cartPage.proceedToCheckoutBtn.click();
        //verify user address, order and place comment in text area before place order
        await this.checkoutPage.verifyAddressOrderAddComment();
        //place order
        await this.checkoutPage.placeOrderBtn.click();
        //enter payment details
        await this.paymentPage.fillPaymentInformation();
        //finish purchase process
        await this.paymentPage.payAndConfirmBtn.click();
        //Verify success message 'Your order has been placed successfully!'
        await this.paymentDonePage.verifyDisplaySuccesMsg();
    }

    async fullPurchaseProcess(){
        await this.homePage.addProductsToCart();
        await this.homePage.moveToCartPage();
        //proceed to checkout
        await this.cartPage.proceedToCheckoutBtn.click();
        //verify user address, order, write comment in text area and place order
        await this.checkoutPage.verifyAddressOrderAddComment();
        await this.checkoutPage.placeOrderBtn.click();
        //fill payment form and finish purchase process
        await this.paymentPage.fillPaymentInformation();
        await this.paymentPage.payAndConfirmBtn.click();
        //verify success message after finish pruchase
        await this.paymentDonePage.verifyDisplaySuccesMsg();
    }

    constructor(private page: Page){
        this.homePage = new HomePage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.paymentPage = new PaymentPage(page);
        this.paymentDonePage = new PaymentDonePage(page);
    }
}