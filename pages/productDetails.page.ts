import { Locator, Page, expect } from "@playwright/test"

export class ProductDetailsPage {

    productName: Locator;
    productCategory: Locator;
    productPrice: Locator;
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

    constructor(private page: Page) {
        this.productName = page.getByRole('heading', { name: 'Blue Top' });
        this.productCategory = page.getByText('Category: Women > Tops');
        this.productPrice = page.getByText('Rs.');
        this.productAvailability = page.getByText('Availability:')
        this.productCondition = page.getByText('Condition:');
        this.productBrand = page.getByText('Brand:');
    }
}