// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();

app.use('/images', express.static('./image-server/product-images'));

app.listen(2000, () => console.log('server started on port 2000 🚀'));
