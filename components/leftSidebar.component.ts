import { Locator, Page } from "@playwright/test";

export class LeftSidebar {
  //women category on sidebar
  womenCategory: Locator;
  wcDressLink: Locator;
  wcTopsLink: Locator;
  wcSareeLink: Locator;
  //men category on sidebar
  menCategory: Locator;
  mcTshirts: Locator;
  mcJeans: Locator;
  //kids category on sidebar
  kidsCategory: Locator;
  kcDressLink: Locator;
  kcTopsShirtsLink: Locator;

  //brands on sidebar
  polo: Locator;
  hm: Locator;
  madame: Locator;
  mastHarbour: Locator;
  babyhug: Locator;
  allenSollyJunior: Locator;
  kookieKids: Locator;
  biba: Locator;

  constructor(private page: Page) {
    this.womenCategory = page.getByRole("link", { name: " Women" });
    this.wcDressLink = page.getByRole("link", { name: "Dress" });
    this.wcTopsLink = page.getByRole("link", { name: "Tops" });
    this.wcSareeLink = page.getByRole("link", { name: "Saree" });
    this.menCategory = page.getByRole("link", { name: " Men" });
    this.mcTshirts = page.getByRole("link", { name: "Tshirts" });
    this.mcJeans = page.getByRole("link", { name: "Jeans" });
    this.kidsCategory = page.getByRole("link", { name: " Kids" });
    this.kcDressLink = page.getByRole("link", { name: "Dress" });
    this.kcTopsShirtsLink = page.getByRole("link", { name: "Tops & Shirts" });
    this.polo = page.getByRole("link", { name: "(6) Polo" });
    this.hm = page.getByRole("link", { name: "(5) H&M" });
    this.madame = page.getByRole("link", { name: "(5) Madame" });
    this.mastHarbour = page.getByRole("link", { name: "(3) Mast & Harbour" });
    this.babyhug = page.getByRole("link", { name: "(4) Babyhug" });
    this.allenSollyJunior = page.getByRole("link", {
      name: "(3) Allen Solly Junior",
    });
    this.kookieKids = page.getByRole("link", { name: "(3) Kookie Kids" });
    this.biba = page.getByRole("link", { name: "(5) Biba" });
  }
}
