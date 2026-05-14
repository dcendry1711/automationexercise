import { Locator, Page } from "@playwright/test"
import { Footer } from "../components/footer.component"

export class CartPage{

    footer: Footer;
    firstProductInCart: Locator;

    constructor(private page: Page){
        this.footer = new Footer(page);
        this.firstProductInCart = page.locator('#product-1');
    }
}