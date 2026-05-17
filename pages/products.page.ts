import { Locator, Page, expect } from "@playwright/test"
import { Navbar } from "../components/navigation.component";

export class ProductsPage {

    navbar: Navbar;
    allProductsHeader: Locator;
    productsList: Locator;
    productNames: Locator;
    viewProductBtnOf1stProduct: Locator;
    searchProductInput: Locator;
    searchProductBtn: Locator;
    searchedProductsListHeader: Locator;
    searchedProductsList: Locator;
    viewCartLinkOnModal: Locator;
    continueShoppingLinkModal: Locator;

    async verificationPage(){
        await expect(this.allProductsHeader).toBeVisible();
    }

    async verifyProductsListVisibility(){
        await expect(this.productsList).toBeVisible();
    }

    async view1stProductDetails(){
        await this.viewProductBtnOf1stProduct.click();
        expect(this.page.url()).toContain('/product_details/1');
    }

    async typeAndSearchAndVerifyProduct(){
        const productNamesArr: string[] = await this.productNames.allTextContents();
        await this.searchProductInput.fill(productNamesArr[0]);
        await this.searchProductBtn.click();
        await expect(this.searchedProductsListHeader).toBeVisible();
        await expect(this.searchedProductsList).toContainText(productNamesArr[0]);
    }

    getProductLocatorToOrder(productId: string){
        return this.page.locator(`a[data-product-id="${productId}"]`);
    }

    async addProductToCart(productId: string){
        const prodLocator = this.getProductLocatorToOrder(productId).first();
        await prodLocator.click();
    }

    constructor(private page: Page) {
        this.navbar = new Navbar(page);
        this.allProductsHeader = page.getByRole('heading', { name: 'All Products' });
        this.productsList = page.getByText('All Products  Added! Your');
        this.productNames = page.locator('.features_items .productinfo p');
        this.viewProductBtnOf1stProduct = page.getByRole('link', { name: ' View Product' }).first();
        this.searchProductInput = page.getByRole('textbox', { name: 'Search Product' });
        this.searchProductBtn = page.locator('#submit_search');
        this.searchedProductsListHeader = page.getByRole('heading', { name: 'Searched Products' });
        this.searchedProductsList = page.getByText('Searched Products  Added!');
        this.viewCartLinkOnModal = page.locator('.modal-content a');
        this.continueShoppingLinkModal = page.locator('.modal-footer button');
    }
}