import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class SuspendreCollabPage extends BasePage {
    readonly page: Page;
    readonly collaboratorMenu: Locator;
    readonly ActionBtn: Locator;
    readonly EditerBtn: Locator;
    readonly SuspendreBtn: Locator;
    readonly ConfirmSusp: Locator
    

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.collaboratorMenu = page.getByText('Collaborateurs');
        this.ActionBtn = page.getByText('Action');   
        this.EditerBtn = page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > .btn-edit-statut > .text > span').first(); 
      // this.SuspendreBtn = page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > #dropdown-action > div:nth-child(2)');   
      this.SuspendreBtn = page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > #dropdown-action > div:nth-child(3)');  
      this.ConfirmSusp = page.getByText('Confirmer');     
      
    }

    async SuspendreCollaborateur() {
        await this.collaboratorMenu.click();
        await this.ActionBtn.click();
        await this.EditerBtn.click();
      await this.SuspendreBtn.click();
      await expect(this.ConfirmSusp).toBeVisible();

      
    }
}
