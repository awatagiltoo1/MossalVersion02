import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class DetailsCollabPage extends BasePage {
    readonly page: Page;
    readonly collaboratorMenu: Locator;
    readonly ActionBtn: Locator;
    readonly EditerBtn: Locator;
    readonly DetailsBtn: Locator;
    readonly InfoCollab: Locator
    readonly DemandeAttente: Locator
    readonly DemandeCours: Locator
    /////////////////////////
    readonly Matricule: Locator;
    readonly Email: Locator;
    readonly Tel: Locator;
    readonly datenaiss: Locator;
    readonly Adresse: Locator;
    readonly MobMoney: Locator
    readonly SalaireNet: Locator
    readonly Acompte: Locator
    readonly Total: Locator
    readonly Balance: Locator
    readonly ModifierBtn: Locator
    readonly SuspendreBtn: Locator;
       

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.collaboratorMenu = page.getByText('Collaborateurs');
        this.ActionBtn = page.getByText('Action');   
        this.EditerBtn = page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > .btn-edit-statut > .text > span').first(); 
        this.DetailsBtn = page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > #dropdown-action > div:nth-child(2)');   
     // this.SuspendreBtn = page.locator('tr:nth-child(4) > td:nth-child(5) > .dropdown > #dropdown-action > div:nth-child(3)');  
      this.InfoCollab = page.getByText('Information Collaborateur');     
      this.DemandeAttente = page.getByText('Demande en attente');  
      this.DemandeCours = page.getByText('Avance salariale remboursable mensuellement');  
      this.Matricule = page.getByText('Matricule');  
      this.Email = page.getByText('Email');  
      this.Tel = page.getByText('Téléphone');  
      this.datenaiss = page.getByText('Date de naissance');     
      this.Adresse = page.getByText('Adresse');  
      this.MobMoney = page.getByText('Mobile money favori');  
     // this.SalaireNet = page.getByText('Salaire net mensuel');  
      this.Acompte = page.getByText('Acompte autorisé');  
      this.Total = page.getByText('Total demandé');  
      this.Balance = page.getByText('Balance');     
      this.ModifierBtn = page.getByText('Modifier');  
      this.SuspendreBtn = page.getByText('Suspendre');   
    }

    async DetailsCollab() {
        await this.collaboratorMenu.click();
        await this.ActionBtn.click();
        await this.EditerBtn.click();
      await this.DetailsBtn.click();
      await expect(this.InfoCollab).toBeVisible();
      await expect(this.DemandeAttente).toBeVisible();
      await expect(this.DemandeCours).toBeVisible();
      await expect(this.Matricule).toBeVisible();
      await expect(this.Email).toBeVisible();
      await expect(this.Tel).toBeVisible();
      await expect(this.datenaiss).toBeVisible();
      await expect(this.Adresse).toBeVisible();
      await expect(this.MobMoney).toBeVisible();
      //await expect(this.SalaireNet).toBeVisible();
     // await expect(this.Acompte).toBeVisible();
      await expect(this.Total).toBeVisible();
     // await expect(this.Balance).toBeVisible();
      await expect(this.ModifierBtn).toBeVisible();
      await expect(this.SuspendreBtn).toBeVisible();

      
    }
}
