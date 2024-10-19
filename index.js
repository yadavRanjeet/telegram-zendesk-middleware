const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const telegramService = require('./services/telegramService');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', apiRoutes);

// Listen for incoming messages from Telegram
telegramService.listenForMessages();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
