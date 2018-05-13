const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = Number(process.env.PORT || '3002');

const app = express();

app.use('/assets', express.static(`${__dirname}/assets`));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const productsRequestHandler = require('./handlers/products-request-handler');

productsRequestHandler(app);

// everything else is considered as unknown endpoint => 404
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Query Runner API server listening on port ${port}`));
