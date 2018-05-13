const cloneDeep = require('lodash/cloneDeep');
const uniqueId = require('lodash/uniqueId');
const merchantResponseOriginal = require('../responses/merchant-request-response');

const merchantResponse = cloneDeep(merchantResponseOriginal);

const itemsPerPage = 4;

module.exports = ((server) => {
  server
    .get('/api/merchant', (req, res) => {
      const page = req.query.page - 1;
      // just simulate delay while fetching new data
      setTimeout((() => {
        res.status(200).json({
          data: merchantResponse.response.data.slice(page * itemsPerPage, (page + 1) * itemsPerPage),
          meta: {
            total: merchantResponse.response.data.length,
            totalPages: Math.ceil(merchantResponse.response.data.length / itemsPerPage),
          },
        });
      }), 100);
    })
    .post('/api/merchant', (req, res) => {
      const merchant = {
        ...req.body,
        id: uniqueId('merchant_'),
        bids: [],
      };
      merchantResponse.response.data.push(merchant);

      // just simulate delay while fetching new data
      setTimeout((() => {
        res.status(200).json({ data: [merchant] });
      }), 100);
    })
    .get('/api/merchant/:merchantId', (req, res) => {
      const merchantId = req.params.merchantId;
      const response = cloneDeep(merchantResponse.response);

      response.data = response.data.filter(merchant => merchant.id === merchantId);

      // just simulate delay while fetching new data
      setTimeout((() => {
        res.status(200).json(response);
      }), 100);
    })
    .delete('/api/merchant/:merchantId', (req, res) => {
      // Here you can add relevant functionality to remove merchant
      const merchantId = req.params.merchantId;
      merchantResponse.response.data = merchantResponse.response.data
        .filter(merchant => merchant.id !== merchantId);

      // just simulate delay while fetching new data
      setTimeout((() => {
        res.status(200).json(true);
      }), 100);
    })
    .put('/api/merchant/:merchantId', (req, res) => {
      // Here you can add relevant functionality to update merchant
      const merchantId = req.params.merchantId;
      let updatedMerchant = {};
      merchantResponse.response.data = merchantResponse.response.data
        .map((merchant) => {
          if (merchant.id === merchantId) {
            updatedMerchant = {
              ...req.body,
              bids: merchant.bids,
            };

            return updatedMerchant;
          }
          return merchant;
        });

      // just simulate delay while fetching new data
      setTimeout((() => {
        res.status(200).json({ data: [updatedMerchant] });
      }), 100);
    })
    .post('/api/merchant/:merchantId/bid', (req, res) => {
      const merchantId = req.params.merchantId;

      merchantResponse.response.data = merchantResponse.response.data
        .map((merchant) => {
          if (merchant.id === merchantId) {
            const date = new Date();

            return {
              ...merchant,
              bids: merchant.bids.concat([
                {
                  id: uniqueId('bid_'),
                  created: date.toISOString(),
                  ...req.body
                }
              ])
            }
          }
          return merchant;
        });

      // just simulate delay while fetching new data
      setTimeout((() => {
        res.status(200).json(true);
      }), 100);
    })
    .delete('/api/merchant/:merchantId/bid/:bidId', (req, res) => {
      // Here you can add relevant functionality to remove merchant
      const merchantId = req.params.merchantId;
      const bidId = req.params.bidId;

      merchantResponse.response.data = merchantResponse.response.data
        .map((merchant) => {
          if (merchant.id === merchantId) {
            return {
              ...merchant,
              bids: merchant.bids.filter(bid => bid.id !== bidId)
            }
          }
          return merchant;
        });

      // just simulate delay while fetching new data
      setTimeout((() => {
        res.status(200).json(true);
      }), 100);
    });
});
