const { chromium } = require('playwright');

(async () => {
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
