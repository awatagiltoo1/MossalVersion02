import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import {test, expect} from '@playwright/test';

export class VisibiliteTypesDemandesPage extends BasePage {
    readonly page: Page;
    readonly MenuDemande: Locator;
    readonly DepanageDurgence: Locator;
    readonly AvanceEvenement: Locator;
    readonly AvanceSalariale: Locator;
    readonly AvanceMensuellementRemboursable : Locator;
    

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.MenuDemande = page.getByText('Liste des demandes');
        this.DepanageDurgence = page.getByText('Dépannage');
        this.AvanceEvenement = page.getByText('Avance sur événement' );
        this.AvanceSalariale = page.getByText('Avance salariale' );
        this.AvanceMensuellementRemboursable = page.getByText('Avance salariale remboursable mensuellement');      
    }

    async VisibiliteTypesDemandes() {
        // await this.ActiviteMenu.click();
         await expect(this.MenuDemande).toBeVisible();
         await this.MenuDemande.click();
         await expect(this.DepanageDurgence).toBeVisible();
         await expect(this.AvanceEvenement).toBeVisible();
        // await expect(this.AvanceSalariale).toBeVisible();
         await expect(this.AvanceMensuellementRemboursable).toBeVisible();
   
       
     }

}