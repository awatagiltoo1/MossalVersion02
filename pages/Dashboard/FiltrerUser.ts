import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';

export class FiltrerUserPage extends BasePage {
    readonly page: Page;
    readonly DashBoardMenu: Locator;
    readonly FiltreUtilisateur: Locator;
    readonly NouveauxUsers: Locator;
    readonly UsersAvancesCours : Locator;
   

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.DashBoardMenu = page.getByText('Tableau de bord');
        this.FiltreUtilisateur = page.getByText('Filtrer').nth(1);
        this.NouveauxUsers = page.getByText('Nombre de demandes en attente (actifs)' );
        this.UsersAvancesCours = page.getByText('Nombre de remboursements restants' );
        
       
    }

    async FiltrerUser() {
        await this.DashBoardMenu.click();
        await this.FiltreUtilisateur.click();
        await expect(this.NouveauxUsers).toBeVisible();
        await expect(this.UsersAvancesCours).toBeVisible();
              
    }
}
