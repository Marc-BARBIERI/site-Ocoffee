const dataMapper = require('../dataMapper.js');

const searchController = {
    
  
    async elementCoffee(req, res,) {
      
      const taste = req.query.taste;
      console.log(taste)
      
      if (taste == 'null') {
       return res.render('catalogue', {title:"Catalogue"})
        
    }
      try {   
        let coffee;
        if(taste){
           coffee = await dataMapper.getCoffee(taste);
          
        }else{
           coffee = await dataMapper.getAllCoffee();
        }
          res.render('catalogue', { coffee , taste, title:"Catalogue"});
  
      } catch (error) {
          // * La gestion d'erreur fait la différence
          console.log('NAME', error.name);
          console.log('CAUSE', error.cause);
          console.log('STACK', error.stack);
  
          res.send(error.message);
      }
    },
    
  
  };
  
  module.exports = searchController;