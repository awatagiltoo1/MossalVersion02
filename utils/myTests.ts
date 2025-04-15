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
import { EditerCollabPage } from '../pages/Collaborateurs/EditerCollab';
import { SuspendreCollabPage } from '../pages/Collaborateurs/SuspendreCollab';
import { DetailsCollabPage } from '../pages/Collaborateurs/DetailsCollab';
import { ImporterTelechargerCollabPage } from '../pages/Collaborateurs/ImportertelechargerCollab';
import { RechercheCollabPage } from '../pages/Collaborateurs/RechercherCollab';
import { VerificationColonneActivitesPage } from '../pages/Activite/VerifierActivite';
import { RechercheSurTabActivitePage } from '../pages/Activite/RechercherActivite';
import { ValiderDemandeUrgencePage } from '../pages/Demandes/ValiderDemandeUrgence';
import { VerificationKpiPage } from '../pages/Dashboard/VerificationKpi';
import { DiagrammeVueEnsemblePage } from '../pages/Dashboard/DiagrammeVueEnsemble';
import { FiltrerUserPage } from '../pages/Dashboard/FiltrerUser';
import { ActiverServicePage } from '../pages/Organisations/Avance Plusieurs Mois/ActiverService';
import { ParametreGenerauxParPourcentagePage } from '../pages/Organisations/Avance Plusieurs Mois/ParametreGenerauxParPourcentage.ts';
import { ParametreGenerauxParMontantPage } from '../pages/Organisations/Avance Plusieurs Mois/ParametreGenerauxParMontant.ts';
import { ParametrerCSPParPourcentagePage } from '../pages/Organisations/Avance Plusieurs Mois/ParametrerCSPParPourcentage.ts';
import { ParametrerCSPParMontanPage } from '../pages/Organisations/Avance Plusieurs Mois/ParametrerCSPParMontant.ts';
import { AS_ParametreGenerauxParMontantPage } from '../pages/Organisations/Avance Salariale/AS_ParametreGenerauxParMontant.ts';
import { AS_ParametreGenerauxParPourcentagePage } from '../pages/Organisations/Avance Salariale/AS_ParametreGenerauxParPourcentage.ts';
export type TestFixtures = {
    basePage: BasePage;
    collaboratorPage: CollaboratorPage;
    visibiliteTypesDemandesPage : VisibiliteTypesDemandesPage
    pg_ajoutCSPPage : PG_AjoutCSPPage
    modificationCSPPage : ModificationCSPPage
    suppressionCSPPage : SuppressionCSPPage
    modidifierPourcentageMontageMaxPage : ModifierPourcentageMontageMaxPage
    modificationDateLimitePage : ModificationDateLimitePage
    editerCollabPage : EditerCollabPage
    suspendreCollabPage : SuspendreCollabPage
    detailsCollabPage : DetailsCollabPage
    importerTelechargerCollabPage : ImporterTelechargerCollabPage
    rechercherCollabPage : RechercheCollabPage
    verificationColonneActivitesPage : VerificationColonneActivitesPage
    rechercheSurTabActivitePage : RechercheSurTabActivitePage
    validerdemandeUrgencePage : ValiderDemandeUrgencePage
    verificationKpiPage : VerificationKpiPage
    diagrammeVueEnsemblePage : DiagrammeVueEnsemblePage
    filtrerUserPage : FiltrerUserPage
    activerServicePage : ActiverServicePage
    parametreGenerauxParPourcentagePage : ParametreGenerauxParPourcentagePage
    parametreGenerauxParMontantPage : ParametreGenerauxParMontantPage
    parametrerCSPParPourcentagePage : ParametrerCSPParPourcentagePage
    parametrerCSPParMontantPage : ParametrerCSPParMontanPage
    as_parametreGenerauxParMontantPage : AS_ParametreGenerauxParMontantPage
    as_parametreGenerauxParPourcentagePage : AS_ParametreGenerauxParPourcentagePage
    
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
},

editerCollabPage: async ({ basePage }, use) => { 
  const editerCollabPage = new EditerCollabPage(basePage.page);
  await use(editerCollabPage);
}
,
suspendreCollabPage: async ({ basePage }, use) => {
  const suspendreCollabPage = new SuspendreCollabPage(basePage.page);
  await use(suspendreCollabPage);
}
,
detailsCollabPage: async ({ basePage }, use) => {
  const detailsCollabPage = new DetailsCollabPage(basePage.page);
  await use(detailsCollabPage);
},

importerTelechargerCollabPage: async ({ basePage }, use) => {
  const importerTelechargerCollabPage = new ImporterTelechargerCollabPage(basePage.page);
  await use(importerTelechargerCollabPage);
},

rechercherCollabPage: async ({ basePage }, use) => {
  const rechercherCollabPage = new RechercheCollabPage(basePage.page);
  await use(rechercherCollabPage);
},

verificationColonneActivitesPage: async ({ basePage }, use) => {
  const verificationColonneActivitesPage = new VerificationColonneActivitesPage(basePage.page);
  await use(verificationColonneActivitesPage);
},

rechercheSurTabActivitePage: async ({ basePage }, use) => {
  const rechercheSurTabActivitePage = new RechercheSurTabActivitePage(basePage.page);
  await use(rechercheSurTabActivitePage);
},

validerdemandeUrgencePage: async ({ basePage }, use) => {
  const validerdemandeUrgencePage = new ValiderDemandeUrgencePage(basePage.page);
  await use(validerdemandeUrgencePage);
},

verificationKpiPage: async ({ basePage }, use) => {
  const verificationKpiPage = new VerificationKpiPage(basePage.page);
  await use(verificationKpiPage);
},
diagrammeVueEnsemblePage: async ({ basePage }, use) => {
  const diagrammeVueEnsemblePage = new DiagrammeVueEnsemblePage(basePage.page);  
  await use(diagrammeVueEnsemblePage);  
},

filtrerUserPage: async ({ basePage }, use) => {
  const filtrerUserPage = new FiltrerUserPage(basePage.page);  
  await use(filtrerUserPage);  
},

activerServicePage: async ({ basePage }, use) => {
  const activerServicePage = new ActiverServicePage(basePage.page);  
  await use(activerServicePage);  
},

parametreGenerauxParPourcentagePage: async ({ basePage }, use) => {  
  const parametreGenerauxParPourcentagePage = new ParametreGenerauxParPourcentagePage(basePage.page);  
  await use(parametreGenerauxParPourcentagePage);  
},

parametreGenerauxParMontantPage : async ({ basePage }, use) => {  
  const parametreGenerauxParMontantPage = new ParametreGenerauxParMontantPage(basePage.page);  
  await use(parametreGenerauxParMontantPage);  
},

parametrerCSPParPourcentagePage : async ({ basePage }, use) => {  
  const parametrerCSPParPourcentagePage = new ParametrerCSPParPourcentagePage(basePage.page);  
  await use(parametrerCSPParPourcentagePage);  
},

parametrerCSPParMontantPage : async ({ basePage }, use) => {  
  const parametrerCSPParMontantPage = new ParametrerCSPParMontanPage(basePage.page);  
  await use(parametrerCSPParMontantPage);  
},  

as_parametreGenerauxParMontantPage : async ({ basePage }, use) => {  
  const as_parametreGenerauxParMontantPage = new AS_ParametreGenerauxParMontantPage(basePage.page);  
  await use(as_parametreGenerauxParMontantPage);  
},  

as_parametreGenerauxParPourcentagePage : async ({ basePage }, use) => {  
  const as_parametreGenerauxParPourcentagePage = new AS_ParametreGenerauxParPourcentagePage(basePage.page);  
  await use(as_parametreGenerauxParPourcentagePage);  
},  


});

  export { expect } from '@playwright/test';