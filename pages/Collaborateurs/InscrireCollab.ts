import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class CollaboratorPage extends BasePage {
    readonly page: Page;
    readonly collaboratorMenu: Locator;
    readonly addColaboratorButton: Locator;
    readonly collaboratorFirstName: Locator;
    readonly collaboratorLasttName: Locator;
    readonly collaboratorEmail: Locator;
    readonly collaboratorPhone: Locator;
       readonly collaboratorBirthDate: Locator;
    readonly collaboratorMatricule: Locator;
    readonly collaboratorSalary: Locator;
       readonly collaboratorPaymentMethod: Locator;
    readonly collaboratorCSP: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.collaboratorMenu = page.getByText('Collaborateurs');
        this.addColaboratorButton = page.getByRole('button', { name: '+ Ajouter un collaborateur' });
        this.collaboratorFirstName = page.getByPlaceholder('Prénom');
        this.collaboratorLasttName = page.locator('#nom');
        this.collaboratorEmail = page.locator('#email');
        this.collaboratorCSP = page.getByLabel('Choisir la catégorie');
        this.collaboratorPhone = page.locator('#telephone');
        this.collaboratorBirthDate = page.locator('#date-naissance');
        this.collaboratorMatricule = page.locator('#matricule');
        this.collaboratorSalary = page.locator('#salaire');
        this.collaboratorPaymentMethod = page.getByRole('combobox');
       // this.saveButton = page.getByRole('button', { name: 'Enregistrer' });
       this.saveButton = page.getByText('Enregistrer');
    }

    async addCollaborator(firstname: string, lastname: string, email: string, phone: string,  birthdate: string, matricule: string, salary: string) {
        await this.collaboratorMenu.click();
        await this.addColaboratorButton.click();
        await this.collaboratorFirstName.fill(firstname);
        await this.collaboratorLasttName.fill(lastname);
        await this.collaboratorMatricule.fill(matricule);
        await this.collaboratorBirthDate.fill(birthdate);
        await this.collaboratorSalary.fill(salary);
        await this.collaboratorEmail.fill(email);
        await this.collaboratorCSP.selectOption('67bddfb7614c74418a4bf90b');
        await this.collaboratorPhone.fill(phone);                 
      //  await this.collaboratorPaymentMethod.selectOption({ index: 0 });
        await this.saveButton.click();
    }
}
