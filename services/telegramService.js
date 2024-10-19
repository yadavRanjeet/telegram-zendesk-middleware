const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const config = require('../config/config');

const bot = new TelegramBot(config.TELEGRAM_BOT_TOKEN, { polling: true });

const messagesFilePath = path.join(__dirname, '../storage/messages.json');

// Function to ensure the directory and file exist
function ensureDirectoryAndFile() {
  const storageDir = path.dirname(messagesFilePath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir, { recursive: true });
  }

  // Create file with empty array if it doesn't exist
  if (!fs.existsSync(messagesFilePath)) {
    fs.writeFileSync(messagesFilePath, JSON.stringify([]), 'utf8');
  }
}

const telegramService = {
  sendMessageToGroup: (message) => {
    const groupId = config.TELEGRAM_GROUP_ID;
    bot.sendMessage(groupId, message);
    telegramService.storeMessage({
      chat: { id: groupId },
      text: message,
      type: 'Sent',
      timestamp: new Date()
    }); 
  },

  listenForMessages: () => {
    bot.on('message', (msg) => {
      console.log('Received full message object:', JSON.stringify(msg, null, 2));
      
      telegramService.storeMessage(msg);
    });
  },

  storeMessage: (msg) => {
    
    ensureDirectoryAndFile();

    
    const data = {
      ...msg,
      timestamp: new Date() 
    };

    // Read the file and append the new message
    fs.readFile(messagesFilePath, 'utf8', (err, fileData) => {
      let messages = [];
      if (!err && fileData) {
        try {
          messages = JSON.parse(fileData); // Parse existing messages
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError);
        }
      }
      messages.push(data); 

      // Write updated messages back to the file
      fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2), (writeErr) => {
        if (writeErr) {
          console.error('Error writing to file', writeErr);
        }
      });
    });
  }
};

module.exports = telegramService;
