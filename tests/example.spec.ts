import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});*/

test('recherche google', async ({ page }) => {
  await page.goto('https://www.google.com');
 // await page.locator('#input').fill('Automatisation des tests');
 await page.getByPlaceholder('Effectuez une recherche sur Google ou saisissez une URL').fill('Automatisation des tests');
  //await page.locator('#input').press('Enter');

  // Click the get started link.
 // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/*const { chromium } = require('playwright');

 {
  // Lance un navigateur
  const browser = await chromium.launch({ headless: false }); // mettre true pour ne pas voir le navigateur
  const page = await browser.newPage();

  // Accède à Google
  await page.goto('https://www.google.com');

  // Accepte les cookies si la boîte de dialogue apparaît
  const acceptBtn = await page.locator('button:has-text("Accepter")');
  if (await acceptBtn.isVisible()) {
    await acceptBtn.click();
  }

  // Tape une requête dans la barre de recherche
  await page.fill('input[name="q"]', 'Playwright JavaScript');
  await page.keyboard.press('Enter');

  // Attend que les résultats soient affichés
  await page.waitForSelector('h3');

  // Récupère les titres des premiers résultats
  const results = await page.$$eval('h3', nodes => nodes.map(n => n.innerText));
  console.log('Résultats trouvés :');
  results.forEach((title, i) => {
    console.log(`${i + 1}. ${title}`);
  });

  // Ferme le navigateur
  await browser.close();
})();
*/
