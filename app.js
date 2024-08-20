import { cron } from "https://deno.land/x/deno_cron/cron.ts";

const APP_URLS = [
    "https://bibila.vercel.app",
    "https://gestionlocationvoiture.onrender.com",
    "https://visiteur.onrender.com",
    "https://ui-visiteur.vercel.app",
];

cron("* * * * *", async () => {  // Toutes les minutes
    for (const url of APP_URLS) {
        await fetch(url);
        console.log("ping reussie")
    }
});
