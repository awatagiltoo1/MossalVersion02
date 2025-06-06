import { faker } from '@faker-js/faker';
import {test, expect } from '../utils/myTests';
import { ParametrerCSPParMontanPage } from '../pages/Organisations/Avance Plusieurs Mois/ParametrerCSPParMontant';
//import { VerificationColonneActivitesPage } from '../pages/Activite/VerifierActivite';

const email = faker.internet.email();
const prenom = faker.person.firstName();
const CSP=faker.person.jobTitle();
const nom = faker.person.lastName();
const identifiant = faker.number.int({ min: 1000, max: 9999 })
const telephone = faker.number.int({min: 1000000, max:9999999})
const birthdayDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
const birthday = birthdayDate.toISOString().split('T')[0];
const MontantMax = faker.number.int({ min: 10, max: 99 })
const Pourcentage = faker.number.int({ min: 10, max: 60 })
const DureeRemb = faker.number.int({ min: 1, max: 7 })



test.describe('TestSuite Collaborateurs', () => {
test('Ajout collaborateur', async ({ collaboratorPage, page}) => {
    
    await collaboratorPage.addCollaborator(prenom, nom, email, '+22177' +telephone.toString(), birthday, identifiant.toString(), '2000000');
});

test('Modifier collaborateur', async ({ editerCollabPage, page}) => {   
    
    await editerCollabPage.EditerCollaborateur(prenom, nom, birthday, '2000000');
});

test('Suspendre collaborateur', async ({ suspendreCollabPage, page}) => {   
    
    await suspendreCollabPage.SuspendreCollaborateur();

});

test('details collaborateur', async ({ detailsCollabPage, page}) => {   
    
    await detailsCollabPage.DetailsCollab();

});

test('Importer ou Telecharger collaborateurs', async ({ importerTelechargerCollabPage, page}) => {   
    
    await importerTelechargerCollabPage.ImportGeneralFichier();

});

test('Rechercher collaborateur', async ({ rechercherCollabPage, page}) => {   
    
    await rechercherCollabPage.RechercherdeCollab('Abdoulaye');

});

});

test.describe('TestSuite Demande', () => {
    test('Visualiser les différets types demandes', async ({ visibiliteTypesDemandesPage, page}) => {
        
        await visibiliteTypesDemandesPage.VisibiliteTypesDemandes();
    });

    test("Valider une demande d'urgence", async ({ validerdemandeUrgencePage, page}) => {
        
        await validerdemandeUrgencePage.ValiderDemandeUrgence();
    });
    });

    test.describe('TestSuite Organisation', () => {
        test('Ajouter une categorie socio_prifessionnelle', async ({ pg_ajoutCSPPage, page}) => {
            
            await pg_ajoutCSPPage.PG_AjoutCSP(CSP);
        });

        test('Modifier une categorie socio_prifessionnelle', async ({ modificationCSPPage, page}) => {
            
            await modificationCSPPage.ModificationCSP(CSP);
        });

        test('Supprimer une categorie socio_prifessionnelle', async ({ suppressionCSPPage, page}) => {
            
            await suppressionCSPPage.SuppressionCSP();
        });

        test('Modifier le pourcentage Maximum de demande', async ({ modidifierPourcentageMontageMaxPage, page}) => {
            
            await modidifierPourcentageMontageMaxPage.ModifierPourcentageMontageMax(MontantMax.toString());
        });

       /* test('Modifier la date limite de demande', async ({ modificationDateLimitePage, page}) => {            
            await modificationDateLimitePage.ModificationDateLimite();  

        });*/
});

test.describe('TestSuite Activité', () => {
    test('Visualiser les paramètres de la page Activité', async ({ verificationColonneActivitesPage, page}) => {
        
        await verificationColonneActivitesPage.VerificationColonneActivites();
    });

    test('Rechercher sur la table Activité', async ({ rechercheSurTabActivitePage, page}) => {
        
        await rechercheSurTabActivitePage.RechercheSurTabActivite('04/02/2025', '08:25');
    });

    });


    test.describe('TestSuite Tableau de bord', () => {
        test('Visualiser les paramètres KPI du tableau de bord', async ({ verificationKpiPage, page}) => {
            
            await verificationKpiPage.VerificationKpi();
        });

    test('Visualiser les paramètres de filtrer sur le tableau de bord', async ({ filtrerUserPage, page}) => {
            
            await filtrerUserPage.FiltrerUser();  

             });


        });

        test.describe('Organisation Avance Plusieurs Mois', () => {
           /* je commente pour verification sur le git
           test('Activer ou desactiver une DAS', async ({ activerServicePage, page}) => {
                           
              await activerServicePage.ActiverService();
            });*/
            test("Parametrer Les PG d'une DAS par pourcentage", async ({ parametreGenerauxParPourcentagePage, page}) => {
                           
                await parametreGenerauxParPourcentagePage.ParametreGenerauxParPourcentagePage(Pourcentage.toString(), DureeRemb.toString())
              });

              test("Parametrer Les PG d'une DAS par montant", async ({ parametreGenerauxParMontantPage, page}) => {
                           
                await parametreGenerauxParMontantPage.ParametreGenerauxParMontant('100000', DureeRemb.toString())
              });

              test("Parametrer une CSP d'une DAS par pourcentage", async ({ parametrerCSPParPourcentagePage, page}) => {
                await parametrerCSPParPourcentagePage.ParametrerCSPParPourcentage('67cef365dadb2b4181a0e55d',Pourcentage.toString(), DureeRemb.toString());
                
              });

              test("Parametrer une CSP d'une DAS par montant", async ({ parametrerCSPParMontantPage, page}) => {
              //  await parametrerCSPParPourcentagePage.ParametrerCSPParPourcentage('67cef365dadb2b4181a0e55d',Pourcentage.toString(), DureeRemb.toString());
                
              await parametrerCSPParMontantPage.ParametrerCSPParMontant('67cef365dadb2b4181a0e55d','150000', DureeRemb.toString());
              });


                       });


                       test.describe('Organisation Avance Salariale', () => {
                        
                         test("Parametrer Les PG d'une DAS par montant", async ({ as_parametreGenerauxParMontantPage, page}) => {
                                        
                             await as_parametreGenerauxParMontantPage.AS_ParametreGenerauxParMontant('95000'.toString(), DureeRemb.toString())
                           });
             
                           test("Parametrer Les PG d'une DAS par pourcentage", async ({ as_parametreGenerauxParPourcentagePage, page}) => {
                                        
                            // await as.ParametreGenerauxParMontant('100000', DureeRemb.toString())
                            await as_parametreGenerauxParPourcentagePage.AS_ParametreGenerauxParPourcentage(Pourcentage.toString(), DureeRemb.toString())
                           });
             
                          /* test("Parametrer une CSP d'une DAS par pourcentage", async ({ parametrerCSPParPourcentagePage, page}) => {
                             await parametrerCSPParPourcentagePage.ParametrerCSPParPourcentage('67cef365dadb2b4181a0e55d',Pourcentage.toString(), DureeRemb.toString());
                             
                           });
             
                           test("Parametrer une CSP d'une DAS par montant", async ({ parametrerCSPParMontantPage, page}) => {
                           //  await parametrerCSPParPourcentagePage.ParametrerCSPParPourcentage('67cef365dadb2b4181a0e55d',Pourcentage.toString(), DureeRemb.toString());
                             
                           await parametrerCSPParMontantPage.ParametrerCSPParMontant('67cef365dadb2b4181a0e55d','150000', DureeRemb.toString());
                           });*/
             
             
                                    });