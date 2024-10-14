const client= require('./database');

const dataMapper = {

    async getNewCoffee() {
        const coffee = await client.query({
          text: `SELECT * FROM coffee WHERE available = TRUE ORDER BY id DESC LIMIT 3;`,
        });
        return coffee.rows;
      },
      
      async getAllCoffee() {
        const coffee = await client.query({
          text: `SELECT * FROM coffee;`,
        });
        return coffee.rows;
      },
      async getProduitCoffee(id) {
        const coffee = await client.query({
          text: `SELECT * FROM coffee WHERE id = $1;`,
          values:[id]
        });
        return coffee.rows[0];
      },
      async getCoffee(taste) {
        const elementCoffee = await client.query({
          text: `SELECT * FROM coffee WHERE taste = $1`,
          values:[taste]
        });
        
        return elementCoffee.rows;
      }
   
  };
  
  module.exports = dataMapper;