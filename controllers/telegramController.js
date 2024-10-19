const telegramService = require('../services/telegramService');
const fs = require('fs'); 
const path = require('path');

const telegramController = {
  sendMessage: (req, res) => {
    const { message } = req.body;
    telegramService.sendMessageToGroup(message);
    res.status(200).json({ success: true, message: 'Message sent!' });
  },

  fetchMessages: (req, res) => {
    const messagesFile = './storage/messages.json';
    fs.readFile(messagesFile, (err, fileData) => {
      if (err) {
        return res.status(500).json({ success: false, error: 'Error reading messages file' });
      }
      const messages = JSON.parse(fileData);
      res.status(200).json({ success: true, messages });
    });
  }
};

module.exports = telegramController;
