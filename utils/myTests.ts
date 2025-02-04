import { faker } from '@faker-js/faker';
import {test as base } from '@playwright/test';
import { BasePage } from '../pages/Collaborateurs/BasePage';
import { CollaboratorPage } from '../pages/Collaborateurs/InscrireCollab';
import { VisibiliteTypesDemandesPage } from '../pages/Demandes/VisibiliteTypesDemandes';
import {PG_AjoutCSPPage} from '../pages/Organisations/PG_AjoutCSP';
import {ModificationCSPPage} from '../pages/Organisations/ModificationCSP';
import {SuppressionCSPPage} from '../pages/Organisations/SuppressionCSP'; 
import {ModifierPourcentageMontageMaxPage} from '../pages/Organisations/ModifierPourcentageMontageMax';
import {ModificationDateLimitePage} from '../pages/Organisations/ModificationDateLimite';

export type TestFixtures = {
    basePage: BasePage;
    collaboratorPage: CollaboratorPage;
    visibiliteTypesDemandesPage : VisibiliteTypesDemandesPage
    pg_ajoutCSPPage : PG_AjoutCSPPage
    modificationCSPPage : ModificationCSPPage
    suppressionCSPPage : SuppressionCSPPage
    modidifierPourcentageMontageMaxPage : ModifierPourcentageMontageMaxPage
    modificationDateLimitePage : ModificationDateLimitePage
    
  };
  const Datelimite = faker.number.int({ min: 1, max: 28 })

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
  },

  modificationCSPPage: async ({ basePage }, use) => { 
    const moduificationCSPPage = new ModificationCSPPage(basePage.page);
    await use(moduificationCSPPage);
}
,
suppressionCSPPage: async ({ basePage }, use) => { 
  const suppressionCSPPage = new SuppressionCSPPage(basePage.page);
  await use(suppressionCSPPage);
}
,
modidifierPourcentageMontageMaxPage: async ({ basePage }, use) => { 
  const modidifierPourcentageMontageMaxPage = new ModifierPourcentageMontageMaxPage(basePage.page);
  await use(modidifierPourcentageMontageMaxPage);
},


modificationDateLimitePage: async ({ basePage }, use) => { 
  const modificationDateLimitePage = new ModificationDateLimitePage(basePage.page,Datelimite.toString());
  await use(modificationDateLimitePage);
}

  });

  export { expect } from '@playwright/test';