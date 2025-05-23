const { Client } = require("pg");

const client = new Client({
	connectionString: process.env.PG_URL,
});

// Connexion à la base de données
client
	.connect()
	.then(() => console.log("🟢 Connexion à PostgreSQL réussie"))
	.catch((err) => {
		console.error("🔴 Erreur de connexion à PostgreSQL :", err.message);
		process.exit(1); // Quitte l'app si la DB ne répond pas
	});

module.exports = client;
