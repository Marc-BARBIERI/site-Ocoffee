
const dataMapper = require('../dataMapper.js');

const mainController = {
 home: async(req, res) => {
       try {
      const coffee = await dataMapper.getNewCoffee();
      res.render('home', {coffee: coffee, title: "Accueil"});
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },
  
    boutiquePage: (req, res) => {
      res.render('boutique', {title: "Boutique"});
    },
  
  produit: async(req, res) => {
    try {
   const coffee = await dataMapper.getAllCoffee();
   res.render('catalogue', {coffee: coffee, title: "Catalogue"});
 } catch (error) {
   console.error(error);
   res.status(500).send(`An error occured with the database :\n${error.message}`);
 }

},
detailProduit: async(req, res) => {
  const id = Number(req.params.id);
  try {
 const coffee = await dataMapper.getProduitCoffee(id);
 res.render('detailProduit', {coffee: coffee, title: "detail Product"});
} catch (error) {
 console.error(error);
 res.status(500).send(`An error occured with the database :\n${error.message}`);
}
},
 
  };



module.exports = mainController;