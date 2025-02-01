import {test as base } from '@playwright/test';
import { BasePage } from '../pages/Collaborateurs/BasePage';
import { CollaboratorPage } from '../pages/Collaborateurs/InscrireCollab';

export type TestFixtures = {
    basePage: BasePage;
    collaboratorPage: CollaboratorPage;
  };

  export const test = base.extend<TestFixtures>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await basePage.goto();
        await basePage.login('genieouzog+mossallv2@gmail.com', 'password');
        await use(basePage);
      //  await basePage.logout();
    },
    
    collaboratorPage: async ({ basePage }, use) => {
        const collaboratorPage = new CollaboratorPage(basePage.page);
        await use(collaboratorPage);
    },
  });

  export { expect } from '@playwright/test';