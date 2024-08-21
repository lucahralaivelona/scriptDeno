import { cron } from "https://deno.land/x/deno_cron/cron.ts";

const APP_URLS = [
    "https://bibila.vercel.app",
    "https://gestionlocationvoiture.onrender.com/api/v1/Rented",
    "https://visiteur.onrender.com/api/v1/Visiteurs",
    "https://ui-visiteur.vercel.app",
];

cron("* * * * *", async () => {  // Toutes les minutes
    for (const url of APP_URLS) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                console.error(`Erreur lors du ping de ${url}: ${response.statusText}`);
                continue;
            }

            const data = await response.text(); // Vous pouvez utiliser .json() si vous attendez un JSON
            console.log(`Réponse reçue de ${url}: ${data}`);
        } catch (error) {
            console.error(`Erreur lors de la requête à ${url}:`, error);
        }
    }
});
