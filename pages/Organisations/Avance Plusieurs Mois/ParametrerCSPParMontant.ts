import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';
import { th } from '@faker-js/faker';


export class ParametrerCSPParMontanPage extends BasePage {
    
    readonly page: Page;
    readonly OrganisationMenu: Locator;
    readonly AvancePlusieursMoisMenu: Locator;
    readonly SelectionCSP: Locator;
    readonly AffichageCSP: Locator;
    ///////////////////////////
    readonly PG_MontantBtn: Locator;
    readonly MontantTexte: Locator;
    readonly DureeRemboursementTexte: Locator;
    readonly ActivationAutomatiqueBtn: Locator;
    readonly validerPGDAS: Locator;
    readonly ConfirmerBtn: Locator;


    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.OrganisationMenu = page.getByText('Organisation');
        this.AvancePlusieursMoisMenu = page.getByText('Avance sur plusieurs mois');  
      this.SelectionCSP = page.getByRole('combobox');
      //this.AffichageCSP = page.locator('#mat-tab-label-6-3').getByText('cadre');
      this.AffichageCSP = page.locator('#mat-tab-label-1-4').getByText('cadre test');
      //////////////////////////////////
      this.PG_MontantBtn = page.getByRole('radio', { name: 'Montant fixe' });
    // this.MontantTexte = page.locator('#amount-input');
    this.MontantTexte= page.getByRole('spinbutton', { name: 'Montant' });
       this.DureeRemboursementTexte = page.locator('#duration-input');
       // this.ActivationAutomatiqueBtn = page.locator('label').filter({ hasText: 'OFF'});
       this.ActivationAutomatiqueBtn=page.locator('label').filter({ hasText: /^OFF$/ });
        this.validerPGDAS= page.getByText('Valider');
        this.ConfirmerBtn= page.getByText('Oui');

       
    }

    async ParametrerCSPParMontant(SelectionCSP:string,PourcentageTexte:string,DureeRemboursementTexte: string){
        
    
        await this.OrganisationMenu.click();
        await this.AvancePlusieursMoisMenu.click();
        await this.SelectionCSP.selectOption(SelectionCSP);
        await this.AffichageCSP.click();
        this.PG_MontantBtn.check();
        await this.MontantTexte.fill(PourcentageTexte);
        await this.DureeRemboursementTexte.fill(DureeRemboursementTexte);
        await this.ActivationAutomatiqueBtn.click();
        await this.validerPGDAS.click();
        await this.ConfirmerBtn.click();

        // je commit
        
    }
      
    }
















//ParametreGenerauxParPourcentagets