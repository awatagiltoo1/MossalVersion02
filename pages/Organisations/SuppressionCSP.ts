import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import {test, expect} from '@playwright/test';

export class SuppressionCSPPage extends BasePage {
    readonly page: Page;
    readonly MenuOrganisation: Locator;
    readonly ParamGenerauxVisible: Locator;
    readonly SupprimerCSPBtn: Locator;
    readonly ConfirmerSuppCSPBtn: Locator;      
   

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.MenuOrganisation = page.getByText('Organisation');
        this.ParamGenerauxVisible = page.getByText('Paramètres généraux');
        this.SupprimerCSPBtn = page.getByText(' 🗑️ ').first();
        this.ConfirmerSuppCSPBtn = page.getByText('Supprimer');
        //this.ConfirmerSuppCSPBtn = page.getByRole('button', { name: 'Confirmer' });
        
       
                   
    }

    async SuppressionCSP() {
        await this.MenuOrganisation.click();
       await expect(this.ParamGenerauxVisible).toBeVisible();
      await this.SupprimerCSPBtn.click(); 
      await this.ConfirmerSuppCSPBtn.click();
    
           
   
       
     }

}