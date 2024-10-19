// const axios = require('axios');
// const config = require('../config/config');

// const zendeskService = {
//   async getTickets() {
//     const url = `${config.ZENDESK_URL}/api/v2/tickets.json`;
//     const auth = Buffer.from(`${config.ZENDESK_EMAIL}/token:${config.ZENDESK_API_TOKEN}`).toString('base64');
    
//     const headers = {
//       'Authorization': `Basic ${auth}`,
//       'Content-Type': 'application/json'
//     };

//     try {
//       const response = await axios.get(url, { headers });
//       return response.data.tickets;
//     } catch (error) {
//       console.error('Error fetching tickets from Zendesk:', error.message);
//       throw error;
//     }
//   }
// };

// module.exports = zendeskService;
