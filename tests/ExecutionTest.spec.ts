import { faker } from '@faker-js/faker';
import {test, expect } from '../utils/myTests';

const email = faker.internet.email();
const prenom = faker.person.firstName();
const CSP=faker.person.jobTitle();
const nom = faker.person.lastName();
const identifiant = faker.number.int({ min: 1000, max: 9999 })
const telephone = faker.number.int({min: 1000000, max:9999999})
const birthdayDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
const birthday = birthdayDate.toISOString().split('T')[0];
const MontantMax = faker.number.int({ min: 10, max: 99 })



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
    
    await rechercherCollabPage.RechercherdeCollab('JKJKS9090J');

});

});

test.describe('TestSuite Demande', () => {
    test('Visualiser les différets types demandes', async ({ visibiliteTypesDemandesPage, page}) => {
        
        await visibiliteTypesDemandesPage.VisibiliteTypesDemandes();
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