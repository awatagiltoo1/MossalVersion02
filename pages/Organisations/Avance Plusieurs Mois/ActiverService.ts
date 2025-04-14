import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';


export class ActiverServicePage extends BasePage {
    readonly page: Page;
    readonly OrganisationMenu: Locator;
    readonly AvancePlusieursMoisMenu: Locator;
    readonly DesactiverBtn: Locator;
    readonly ReactiverBtn: Locator;

    
    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.OrganisationMenu = page.getByText('Organisation');
        this.AvancePlusieursMoisMenu = page.getByText('Avance sur plusieurs mois'); 
        this.DesactiverBtn = page.locator('label').filter({ hasText: 'Inactif' });
        this.ReactiverBtn = page.locator('label').filter({ hasText: /^Actif$/ });
       
    }

    async ActiverService() {
        await this.OrganisationMenu.click();
        await this.AvancePlusieursMoisMenu.click();
        await this.DesactiverBtn.click();
        await this.ReactiverBtn.click();
      
    }
}
