import { Locator, Page, expect } from "@playwright/test"
import { Footer } from "../components/footer.component"
import { Modal } from "../components/modal.component";
import { Product } from "../types/product";

export class CartPage{

    footer: Footer;
    modal: Modal;
    firstProductInCart: Locator;
    proceedToCheckoutBtn: Locator;


    getCartProductRow(rowNumber: number){
        return this.page.locator(`#product-${rowNumber}`);
    }

    async verifyProductsInCart(products: Product[]){
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const rowNumber = i + 1;
            const cartProductRow = this.getCartProductRow(rowNumber);
            
            await expect(cartProductRow.locator('.cart_description a')).toContainText(product.name);
            await expect(cartProductRow.locator('.cart_price p')).toContainText(product.price);
            await expect(cartProductRow.locator('.cart_quantity button')).toContainText(product.quantity);
            // Można również dodać weryfikację sumy, jeśli jest wymagana
        }
    }

    async verifyProductQuantityInCart(row: number, expectedQuantity: string){
        const productInCartRow = this.getCartProductRow(row);
        await expect(productInCartRow.locator('.cart_quantity button')).toContainText(expectedQuantity);
    }

    constructor(private page: Page){
        this.footer = new Footer(page);
        this.modal = new Modal(page);
        this.firstProductInCart = page.locator('#product-1');
        this.proceedToCheckoutBtn = page.locator('a.check_out');
    }
}