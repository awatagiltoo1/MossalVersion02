import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { test, expect } from '@playwright/test';


export class RechercheCollabPage extends BasePage {
    readonly page: Page;
    readonly collaboratorMenu: Locator;
    readonly searchCollab: Locator;
    readonly nomCollabverifie: Locator;
    

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.collaboratorMenu = page.getByText('Collaborateurs');
        this.searchCollab = page.getByPlaceholder('Recherche');
        this.nomCollabverifie = page.getByText('Abdoulaye Ly' );
       
    }

    async RechercherdeCollab(searchColab: string) {
        await this.collaboratorMenu.click();
        await this.searchCollab.fill(searchColab);
      //  await expect(this.nomCollabverifie).toBeVisible();
        await this.searchCollab.press('Enter');
      
    }
}
