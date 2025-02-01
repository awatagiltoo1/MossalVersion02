import { faker } from '@faker-js/faker';
import {test, expect } from '../utils/myTests';
//import { CollaboratorPage } from '../pages/CollaboratorPage';
const email = faker.internet.email();
const prenom = faker.person.firstName();
const nom = faker.person.lastName();
const identifiant = faker.number.int({ min: 1000, max: 9999 })
const telephone = faker.number.int({min: 1000000, max:9999999})
const birthdayDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
const birthday = birthdayDate.toISOString().split('T')[0];
const profilAdresse = faker.location.streetAddress();
const pourcentage = faker.number.int({ min: 1, max: 100 });

test.describe('TestSuite Collaborateurs', () => {
test('Ajout collaborateur', async ({ collaboratorPage, page}) => {
    
    await collaboratorPage.addCollaborator(prenom, nom, email, '77' +telephone.toString(), birthday, identifiant.toString(), '2000000');
});
});