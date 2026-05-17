import { Locator, Page, expect } from "@playwright/test"
import { PurchaseModal } from "../components/purchaseModal.component";

export class ProductDetailsPage {

    purchaseModal: PurchaseModal;
    productName: Locator;
    productCategory: Locator;
    productPrice: Locator;
    productQuantity: Locator;
    addToCartBtn: Locator;
    productAvailability: Locator;
    productCondition: Locator;
    productBrand: Locator;

    async verifyVisibilityOfProductDetails(){
        await expect(this.productName).toBeVisible();
        await expect(this.productCategory).toBeVisible();
        await expect(this.productPrice).toBeVisible();
        await expect(this.productAvailability).toBeVisible();
        await expect(this.productCondition).toBeVisible();
        await expect(this.productBrand).toBeVisible();
    }

    async specifyQuantityAndOrderProduct(quantity: string){
        await this.productQuantity.fill(quantity);
        await this.addToCartBtn.click();
    }

    constructor(private page: Page) {
        this.purchaseModal = new PurchaseModal(page);
        this.productName = page.getByRole('heading', { name: 'Blue Top' });
        this.productCategory = page.getByText('Category: Women > Tops');
        this.productPrice = page.getByText('Rs.');
        this.productQuantity = page.locator('#quantity');
        this.addToCartBtn = page.locator('.product-information button');
        this.productAvailability = page.getByText('Availability:')
        this.productCondition = page.getByText('Condition:');
        this.productBrand = page.getByText('Brand:');
    }
}