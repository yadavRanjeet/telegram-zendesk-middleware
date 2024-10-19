// const zendeskService = require('../services/zendeskService');
// const telegramService = require('../services/telegramService');

// const zendeskController = {
//   async fetchTicketsAndNotify(req, res) {
//     try {
//       const tickets = await zendeskService.getTickets();
//       const chatId = req.body.chatId;  // Assuming the Telegram chatId comes in the request body

//       let message = 'Here are your Zendesk tickets:\n';
//       tickets.forEach(ticket => {
//         message += `\nTicket #${ticket.id}: ${ticket.subject}`;
//       });

//       // Send the ticket information to Telegram
//       telegramService.sendMessage(chatId, message);

//       res.status(200).json({ success: true, tickets });
//     } catch (error) {
//       res.status(500).json({ success: false, message: error.message });
//     }
//   }
// };

// module.exports = zendeskController;
