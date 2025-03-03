import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';

export class DiagrammeVueEnsemblePage extends BasePage {
    readonly page: Page;
    readonly DashBoardMenu: Locator;
    readonly VueEnsemble: Locator;
    readonly Montant: Locator;
    readonly MontantTotal : Locator;
    readonly Reste : Locator;
    readonly mois1 : Locator;
    readonly mois2 : Locator;
    
    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.DashBoardMenu = page.getByText('Tableau de bord');
        this.VueEnsemble = page.getByText('Vue d’ensemble des remboursements' );
        this.mois1 = page.getByText('Janvier 2025' );
        this.mois2 = page.getByText('Février 2025' );
        //SvgjsTspan2477

        /*this.Montant = page.getByText('Montant' );
        this.MontantTotal = page.getByText('Montant total' );
        this.Reste = page.getByText('Reste à payer' );*/
           
       
    }

    async DiagrammeVueEnsemble() {
        await this.DashBoardMenu.click();
        await expect(this.VueEnsemble).toBeVisible();
        await expect(this.mois1).toBeVisible();
        await expect(this.mois2).toBeVisible();
        //await expect(this.Reste).toBeVisible();
         
      
    }
}
