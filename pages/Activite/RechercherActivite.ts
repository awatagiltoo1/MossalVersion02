import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';
import { da } from '@faker-js/faker';


export class RechercheSurTabActivitePage extends BasePage {
    readonly page: Page;
    readonly ActiviteMenu: Locator;
    readonly ZoneRecherche: Locator;
    readonly PresenceStatut: Locator;
  //  readonly AffichageDate : Locator;
    readonly FiltreParStatutInitial : Locator;


    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.ActiviteMenu = page.getByText('Activités');
        this.ZoneRecherche = page.getByPlaceholder('Recherche' );
       // this.AffichageDate = page.getByText('CHEIKH NDIAYE');
        this.PresenceStatut = page.getByText('Statut payment: success' );
             
       
    }

    async RechercheSurTabActivite(dateactivite: string, heureactivite: string) {
        await this.ActiviteMenu.click();
        await this.ZoneRecherche.fill(dateactivite);
      //  await expect(this.AffichageDate).toBeVisible();
        await this.ZoneRecherche.clear();
        await this.ZoneRecherche.fill(heureactivite);
        await expect(this.PresenceStatut).toBeVisible();
       
      
    }
}
