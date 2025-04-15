import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';


export class AS_ParametreGenerauxParPourcentagePage extends BasePage {
    
    readonly page: Page;
    readonly OrganisationMenu: Locator;
    readonly AvanceSalarialeMenu: Locator;
    readonly PG_pourcentageBtn: Locator;
    readonly PourcentageTexte: Locator;
    readonly DureeRemboursementTexte: Locator;
    readonly ActivationAutomatiqueBtn: Locator;
    readonly validerPGDAS: Locator;
    readonly ConfirmerBtn: Locator;


    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.OrganisationMenu = page.getByText('Organisation');
        this.AvanceSalarialeMenu = page.locator('#mat-tab-label-0-2');
        this.PG_pourcentageBtn = page.getByRole('radio', { name: 'Pourcentage' });
        this.PourcentageTexte = page.locator('#amount-input');
        this.DureeRemboursementTexte = page.locator('#duration-input');
        this.ActivationAutomatiqueBtn = page.locator('label').filter({ hasText: 'OFF'});
        this.validerPGDAS= page.getByText('Valider');
        this.ConfirmerBtn= page.getByText('Oui');

       
    }

    async AS_ParametreGenerauxParPourcentage(PourcentageTexte:string,DureeRemboursementTexte: string ){
        
    
        await this.OrganisationMenu.click();
        await this.AvanceSalarialeMenu.click();
        await this.PG_pourcentageBtn.check();
        await this.PourcentageTexte.fill(PourcentageTexte);
       // await this.DureeRemboursementTexte.fill(DureeRemboursementTexte);
        await this.ActivationAutomatiqueBtn.click();
        await this.validerPGDAS.click();
        await this.ConfirmerBtn.click();

        // je commit
        
    }
      
    }

