import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { test, expect } from '@playwright/test';


export class ImporterTelechargerCollabPage extends BasePage {
    readonly page: Page;
    readonly collaboratorMenu: Locator;
    readonly BtnImportFichier: Locator;
    readonly ImportExcel: Locator;
    readonly TelechargerTemplate: Locator;
   // readonly TelechargerTemplate: Locator;
    

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.collaboratorMenu = page.getByText('Collaborateurs');
        this.BtnImportFichier = page.getByText('Importer un fichier');
        //this.searchCollab = page.getByPlaceholder('Recherche');
        this.ImportExcel = page.getByText('ImporterFormat accepté : XLSX' );
        this.TelechargerTemplate = page.getByText('Télécharger le template' );
       
    }

    async ImportGeneralFichier() {
        await this.collaboratorMenu.click();
        await this.BtnImportFichier.click();
        await expect(this.ImportExcel).toBeVisible();
        await expect(this.TelechargerTemplate).toBeVisible();
      
    }
}
