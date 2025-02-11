import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../Collaborateurs/BasePage';
import { test, expect } from '@playwright/test';


export class VerificationColonneActivitesPage extends BasePage {
    readonly page: Page;
    readonly ActiviteMenu: Locator;
    readonly MessageCln: Locator;
    readonly FaitParCln: Locator;
    readonly EmailCln : Locator;
    readonly ScopeCln : Locator;
    readonly DateCln : Locator;

    constructor(page: Page) {   
        super(page);
        this.page = page;
        this.ActiviteMenu = page.getByText('Activités');
        this.MessageCln = page.getByText('Message' );
        this.FaitParCln = page.getByText('Fait par' );
        this.EmailCln = page.getByText(' Email' );
        this.ScopeCln = page.getByText('Scope' );
        this.DateCln = page.getByText(' Date' );       
       
    }

    async VerificationColonneActivites() {
        await this.ActiviteMenu.click();
        await expect(this.MessageCln).toBeVisible();
        await expect(this.FaitParCln).toBeVisible();
        await expect(this.EmailCln).toBeVisible();
        await expect(this.ScopeCln).toBeVisible();
        await expect(this.DateCln).toBeVisible();      
      
    }
}
