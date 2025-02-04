import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import {test, expect} from '@playwright/test';

export class ModifierPourcentageMontageMaxPage extends BasePage {
    readonly page: Page;
    readonly MenuOrganisation: Locator;
    readonly ParamGenerauxVisible: Locator;
    readonly ModifierPourcentMax: Locator;
    readonly MAJBtn: Locator;
    readonly TextConfirmation: Locator


    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.MenuOrganisation = page.getByText('Organisation');
        this.ParamGenerauxVisible = page.getByText('Paramètres généraux');
        this.ModifierPourcentMax = page.locator('#percentage-input');
        this.MAJBtn = page.getByText(' Mettre à jour ');
        this.TextConfirmation = page.getByText('PLAFOND MODIFIE');
      
                   
    }

    async ModifierPourcentageMontageMax(MontantMax: string) {
        await this.MenuOrganisation.click();
       await expect(this.ParamGenerauxVisible).toBeVisible();
    await this.ModifierPourcentMax.fill(MontantMax);
     await this.MAJBtn.click();
     await expect(this.TextConfirmation).toBeVisible();
           
   
       
     }

}