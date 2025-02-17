import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import {test, expect} from '@playwright/test';

export class ModificationCSPPage extends BasePage {
    readonly page: Page;
    readonly MenuOrganisation: Locator;
    readonly ParamGenerauxVisible: Locator;
    readonly ModifierCSPBtn: Locator;
    readonly NomCSPBtn: Locator;      
    readonly ValiderModifBnt: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.MenuOrganisation = page.getByText('Organisation');
        this.ParamGenerauxVisible = page.getByText('Paramètres généraux');
        this.ModifierCSPBtn = page.getByText('✏️').first();
       this.NomCSPBtn = page.getByRole('listitem').filter({ hasText: '✔️❌' }).getByRole('textbox')
     this.ValiderModifBnt = page.getByText('✔️');
                   
    }

    async ModificationCSP(nomCSP: string) {
        await this.MenuOrganisation.click();
       await expect(this.ParamGenerauxVisible).toBeVisible();
      await this.ModifierCSPBtn.click(); 
      await this.NomCSPBtn.fill(nomCSP);
     await this.ValiderModifBnt.click();
           
   
       
     }

}