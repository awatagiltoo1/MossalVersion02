import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class EditerCollabPage extends BasePage {
    readonly page: Page;
    readonly collaboratorMenu: Locator;
    readonly ActionBtn: Locator;
    readonly EditerBtn: Locator;
    readonly EditerBtnbis: Locator;
    readonly collaboratorPrenom: Locator;
    readonly CollaboratorNom: Locator;
    readonly collaboratorPhone: Locator;
    readonly collaboratorFonction: Locator;
    readonly collaboratorBirthDate: Locator;
    readonly collaboratorSalary: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.collaboratorMenu = page.getByText('Collaborateurs');
        this.ActionBtn = page.getByText('Action');
      
        this.EditerBtn= page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > .btn-edit-statut > .text > span').first(); 
      this.EditerBtnbis= page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > #dropdown-action > div:nth-child(1)');   
     
        this.collaboratorPrenom = page.getByPlaceholder('Prénom');
        this.CollaboratorNom = page.locator('#nom');
        this.collaboratorPhone = page.locator('#telephone');
        this.collaboratorBirthDate = page.locator('#date-naissance');
        this.collaboratorSalary = page.locator('#salaire');
        this.saveButton = page.getByText('Enregistrer');
    }

    async EditerCollaborateur(collaboratorPrenom: string, CollaboratorNom: string, collaboratorBirthDate: string, collaboratorSalary: string) {
        await this.collaboratorMenu.click();
        await this.ActionBtn.click();
        await this.EditerBtn.click();
        await this.EditerBtnbis.click();
       await this.collaboratorPrenom.clear();
        await this.collaboratorPrenom.fill(collaboratorPrenom);
        await this.CollaboratorNom.clear();
        await this.CollaboratorNom.fill(CollaboratorNom);
        await this.collaboratorBirthDate.clear();
        await this.collaboratorBirthDate.fill(collaboratorBirthDate);
        await this.collaboratorSalary.clear();
        await this.collaboratorSalary.fill(collaboratorSalary);
       await this.saveButton.click();
    }
}
