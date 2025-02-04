import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import {test, expect} from '@playwright/test';

export class PG_AjoutCSPPage extends BasePage {
    readonly page: Page;
    readonly MenuOrganisation: Locator;
    readonly ParamGenerauxVisible: Locator;
    readonly AjoutCSPBtn: Locator;
    readonly NomCSPBtn: Locator;      

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.MenuOrganisation = page.getByText('Organisation');
        this.ParamGenerauxVisible = page.getByText('Paramètres généraux');
        this.NomCSPBtn = page.getByPlaceholder('Nom de la catégorie');
        this.AjoutCSPBtn = page.getByRole('button', { name: 'Ajouter' });
           
             
    }

    async PG_AjoutCSP(nomCSP: string) {
        await this.MenuOrganisation.click();
       await expect(this.ParamGenerauxVisible).toBeVisible();
       await this.NomCSPBtn.fill(nomCSP);
       await this.AjoutCSPBtn.click();     
   
       
     }

}