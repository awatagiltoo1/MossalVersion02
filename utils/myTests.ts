import {test as base } from '@playwright/test';
import { BasePage } from '../pages/Collaborateurs/BasePage';
import { CollaboratorPage } from '../pages/Collaborateurs/InscrireCollab';
import { VisibiliteTypesDemandesPage } from '../pages/Demandes/VisibiliteTypesDemandes';
import {PG_AjoutCSPPage} from '../pages/Organisations/PG_AjoutCSP';

export type TestFixtures = {
    basePage: BasePage;
    collaboratorPage: CollaboratorPage;
    visibiliteTypesDemandesPage : VisibiliteTypesDemandesPage
    pg_ajoutCSPPage : PG_AjoutCSPPage
  };

  export const test = base.extend<TestFixtures>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await basePage.goto();
        await basePage.login('genieouzog+mossallv2@gmail.com', 'password');
        await use(basePage);
      //  await basePage.logout();
      //test
    },
    
    collaboratorPage: async ({ basePage }, use) => {
        const collaboratorPage = new CollaboratorPage(basePage.page);
        await use(collaboratorPage);
    },

    visibiliteTypesDemandesPage: async ({ basePage }, use) => { 
        const visibiliteTypesDemandesPage = new VisibiliteTypesDemandesPage(basePage.page);
        await use(visibiliteTypesDemandesPage);
    },

    pg_ajoutCSPPage: async ({ basePage }, use) => { 
      const pg_ajoutCSPPage = new PG_AjoutCSPPage(basePage.page);
      await use(pg_ajoutCSPPage);
  }
  });

  export { expect } from '@playwright/test';