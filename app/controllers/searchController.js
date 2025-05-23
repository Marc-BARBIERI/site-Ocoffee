const dataMapper = require("../dataMapper.js");

const searchController = {
	async elementCoffee(req, res) {
		const taste = req.query.taste;

		try {
			let coffee;

			if (taste === "null") {
				coffee = await dataMapper.getAllCoffee();
			} else if (taste) {
				coffee = await dataMapper.getCoffee(taste);
			} else {
				coffee = await dataMapper.getAllCoffee();
			}

			res.render("catalogue", { coffee, taste, title: "Catalogue" });
		} catch (error) {
			console.log("NAME", error.name);
			console.log("CAUSE", error.cause);
			console.log("STACK", error.stack);

			res.send(error.message);
		}
	},
};

module.exports = searchController;
