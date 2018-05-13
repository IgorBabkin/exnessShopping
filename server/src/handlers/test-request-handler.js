const testResponse = require('../responses/test-request-response');

module.exports = ((server) => {
  server
    .all('/api/test', (req, res) => {
      // just simulate delay while fetching new data
      setTimeout((() => {
        res.status(200).json(testResponse.response);
      }), 2000);
    });
});
