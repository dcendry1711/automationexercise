import { Locator, Page, expect } from "@playwright/test"
import { Navbar } from "../components/navigation.component";

export class ProductsPage {

    navbar: Navbar;
    allProductsHeader: Locator;
    productsList: Locator;
    viewProductBtnOf1stProduct: Locator;

    async navigateToPage(){
        await this.navbar.productsLink.click();
        await expect(this.allProductsHeader).toBeVisible();
    }

    async verifyProductsListVisibility(){
        await expect(this.productsList).toBeVisible();
    }

    async view1stProductDetails(){
        await this.viewProductBtnOf1stProduct.click();
        expect(this.page.url()).toContain('/product_details/1')
    }

    constructor(private page: Page) {
        this.navbar = new Navbar(page);
        this.allProductsHeader = page.getByRole('heading', { name: 'All Products' });
        this.productsList = page.getByText('All Products  Added! Your');
        this.viewProductBtnOf1stProduct = page.getByRole('link', { name: ' View Product' }).first();
    }
}