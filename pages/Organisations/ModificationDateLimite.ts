import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import {test, expect} from '@playwright/test';

export class ModificationDateLimitePage extends BasePage {
    readonly page: Page;
    readonly MenuOrganisation: Locator;
    readonly ParamGenerauxVisible: Locator;
    readonly ModifierDateLimite: Locator;
    readonly MAJBtn: Locator;
    readonly TextConfirmation: Locator


    constructor(page: Page, lename: string) {
        
     
        super(page);
        this.page = page;
        this.MenuOrganisation = page.getByText('Organisation');
        this.ParamGenerauxVisible = page.getByText('Paramètres généraux');
        this.ModifierDateLimite = page.getByRole('button', { name: lename });
        this.MAJBtn = page.getByText(' Mettre à jour ');
        //this.TextConfirmation = page.getByText('PLAFOND MODIFIE');
      
                   
    }

    async ModificationDateLimite() {
        await this.MenuOrganisation.click();
       await expect(this.ParamGenerauxVisible).toBeVisible();
     await this.ModifierDateLimite.click();
     await this.MAJBtn.click();
     //await expect(this.TextConfirmation).toBeVisible();
           
   
       
     }

}