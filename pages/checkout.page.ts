import { Locator, Page, expect } from "@playwright/test"

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

    constructor(private page: Page){
        this.deliveryAddressBlock = page.locator('#address_delivery')
        this.commentOrderTextArea = page.locator('.form-control');
        this.placeOrderBtn = page.locator('a.check_out');
    }
}