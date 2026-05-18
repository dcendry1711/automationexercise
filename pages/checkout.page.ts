import { Locator, Page, expect } from "@playwright/test"
import { userAccInfoForm } from "../data/userAccInfoForm.data";

export class CheckoutPage{

    //delivery address details locators
    deliveryAddressBlock: Locator;
    commentOrderTextArea: Locator;
    placeOrderBtn: Locator;


    getProductToReviewRow(rowNumber: number){
        return this.page.locator(`#product-${rowNumber}`);
    }

    async rewiev1stProduct(){
        const firstProductLocator = this.getProductToReviewRow(1);
        await expect(firstProductLocator.locator('.cart_description a')).toContainText('Blue Top');
        await expect(firstProductLocator.locator('.cart_price p')).toContainText('Rs. 500');
        await expect(firstProductLocator.locator('.cart_quantity button')).toContainText('1');
        await expect(firstProductLocator.locator('.cart_total p')).toContainText('Rs. 500');
    }

    async review2ndProduct(){
        const secondProductLocator = this.getProductToReviewRow(2);
        await expect(secondProductLocator.locator('.cart_description a')).toContainText('Men Tshirt');
        await expect(secondProductLocator.locator('.cart_price p')).toContainText('Rs. 400');
        await expect(secondProductLocator.locator('.cart_quantity button')).toContainText('1');
        await expect(secondProductLocator.locator('.cart_total p')).toContainText('Rs. 400');
    }

    async verifyUserAddressAndOrder(){
        expect(this.deliveryAddressBlock).toContainText(userAccInfoForm.firstName);
        expect(this.deliveryAddressBlock).toContainText(userAccInfoForm.lastName);
        expect(this.deliveryAddressBlock).toContainText(userAccInfoForm.address);
        expect(this.deliveryAddressBlock).toContainText(userAccInfoForm.address2);
        expect(this.deliveryAddressBlock).toContainText(userAccInfoForm.city);
        expect(this.deliveryAddressBlock).toContainText(userAccInfoForm.state);
        expect(this.deliveryAddressBlock).toContainText(userAccInfoForm.zipcode);
        expect(this.deliveryAddressBlock).toContainText(userAccInfoForm.country);
        expect(this.deliveryAddressBlock).toContainText(userAccInfoForm.mobileNumber);
        await this.rewiev1stProduct();
        await this.review2ndProduct();
        await this.commentOrderTextArea.fill('test comment');
    }

    constructor(private page: Page){
        this.deliveryAddressBlock = page.locator('#address_delivery')
        this.commentOrderTextArea = page.locator('.form-control');
        this.placeOrderBtn = page.locator('a.check_out');
    }
}