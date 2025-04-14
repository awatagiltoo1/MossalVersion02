import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';


export class ParametreGenerauxParMontantPage extends BasePage {
    
    readonly page: Page;
    readonly OrganisationMenu: Locator;
    readonly AvancePlusieursMoisMenu: Locator;
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
       this.PG_MontantBtn = page.getByRole('radio', { name: 'Montant fixe' });
        this.MontantTexte = page.locator('#amount-input');
        this.DureeRemboursementTexte = page.locator('#duration-input');
        this.ActivationAutomatiqueBtn = page.locator('label').filter({ hasText: 'OFF'});
        this.validerPGDAS= page.getByText('Valider');
        this.ConfirmerBtn= page.getByText('Oui');

       
    }

    async ParametreGenerauxParMontant(PourcentageTexte:string,DureeRemboursementTexte: string ){
        
    
        await this.OrganisationMenu.click();
        await this.AvancePlusieursMoisMenu.click();
        await this.PG_MontantBtn.check();
        await this.MontantTexte.fill(PourcentageTexte);
        await this.DureeRemboursementTexte.fill(DureeRemboursementTexte);
        await this.ActivationAutomatiqueBtn.click();
        await this.validerPGDAS.click();
        await this.ConfirmerBtn.click();

        
    }
      
    }
















//ParametreGenerauxParPourcentagets