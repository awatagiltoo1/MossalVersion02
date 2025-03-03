import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';

export class VerificationKpiPage extends BasePage {
    readonly page: Page;
    readonly DashBoardMenu: Locator;
    readonly DemandeAccordees: Locator;
    readonly DemandeAttente: Locator;
    readonly NbrRemboursementRestants : Locator;
    readonly TotalDemande : Locator;
    readonly NbreInscrits : Locator;
    readonly MntRemboursementRestants : Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.DashBoardMenu = page.getByText('Tableau de bord');
        this.DemandeAccordees = page.getByText('Nombre de demandes accordés' );
        this.DemandeAttente = page.getByText('Nombre de demandes en attente (actifs)' );
        this.NbrRemboursementRestants = page.getByText('Nombre de remboursements restants' );
        this.TotalDemande = page.getByText('Montant total des demandes' );
        this.NbreInscrits = page.getByText(' Nombre d’inscrits' );    
        this.MntRemboursementRestants = page.getByText(' Montant remboursements restants' );   
       
    }

    async VerificationKpi() {
        await this.DashBoardMenu.click();
        await expect(this.DemandeAccordees).toBeVisible();
        await expect(this.DemandeAttente).toBeVisible();
        await expect(this.NbrRemboursementRestants).toBeVisible();
        await expect(this.TotalDemande).toBeVisible();
        await expect(this.NbreInscrits).toBeVisible();
        await expect(this.MntRemboursementRestants).toBeVisible();      
      
    }
}
