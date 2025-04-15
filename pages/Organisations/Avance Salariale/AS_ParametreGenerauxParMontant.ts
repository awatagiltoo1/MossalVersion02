import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';


export class AS_ParametreGenerauxParMontantPage extends BasePage {
    
    readonly page: Page;
    readonly OrganisationMenu: Locator;
    readonly AvanceSalarialeMenu: Locator;
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
        this.AvanceSalarialeMenu = page.locator('#mat-tab-label-0-2');
       this.PG_MontantBtn = page.getByRole('radio', { name: 'Montant fixe' });
        this.MontantTexte = page.locator('#amount-input');
       this.ActivationAutomatiqueBtn=page.locator('label').filter({ hasText: /^OFF$/ });
       this.validerPGDAS= page.getByText('Valider');
        this.ConfirmerBtn= page.getByText('Oui');

       
    }

    async AS_ParametreGenerauxParMontant(PourcentageTexte:string,DureeRemboursementTexte: string ){
        
    
        await this.OrganisationMenu.click();
        await this.AvanceSalarialeMenu.click();
        await this.PG_MontantBtn.check();
        await this.MontantTexte.fill(PourcentageTexte);
        await this.ActivationAutomatiqueBtn.click();
        await this.validerPGDAS.click();
        await this.ConfirmerBtn.click();

        
    }
      
    }

