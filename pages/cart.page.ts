import { Locator, Page, expect } from "@playwright/test"
import { Footer } from "../components/footer.component"
export class CartPage{

    footer: Footer;
    firstProductInCart: Locator;


    getCartProductRow(rowNumber: number){
        return this.page.locator(`#product-${rowNumber}`);
    }

    async verify1stProductInCart(){
        const cart1ProductRow = this.getCartProductRow(1);
        await expect(cart1ProductRow.locator('.cart_description a')).toContainText('Blue Top');
        await expect(cart1ProductRow.locator('.cart_price p')).toContainText('Rs. 500');
        await expect(cart1ProductRow.locator('.cart_quantity button')).toContainText('1');
        await expect(cart1ProductRow.locator('.cart_total p')).toContainText('Rs. 500');
    }

    async verify2ndProductInCart(){
        const cart2ProductRow = this.getCartProductRow(2);
        await expect(cart2ProductRow.locator('.cart_description a')).toContainText('Men Tshirt');
        await expect(cart2ProductRow.locator('.cart_price p')).toContainText('Rs. 400');
        await expect(cart2ProductRow.locator('.cart_quantity button')).toContainText('1');
        await expect(cart2ProductRow.locator('.cart_total p')).toContainText('Rs. 400');
    }

    constructor(private page: Page){
        this.footer = new Footer(page);
        this.firstProductInCart = page.locator('#product-1');
    }
}