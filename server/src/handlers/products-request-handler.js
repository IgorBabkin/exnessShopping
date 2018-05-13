const cloneDeep = require('lodash/cloneDeep');
const productsResponseOriginal = require('../responses/products-request-response');

const products = cloneDeep(productsResponseOriginal);

module.exports = ((server) => {
  server
    .get('/api/products', (req, res) => {
      setTimeout((() => {
        res.status(200).json({
          products: products.response.data,
        });
      }), 100);
    });
});
