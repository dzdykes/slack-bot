const { WebClient } = require('@slack/client')
require('dotenv').config()

// The first argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const channelId = 'C3DE9B39S';
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

module.exports = function(app) {
  app.post('/slack-message', (req, res) => {
    // See: https://api.slack.com/methods/chat.postMessage
    let options = {
      "icon_emoji" : req.body.emoji,
      "link_names": 1
    }
    web.chat.postMessage(channelId, req.body.message, options).then((slackRes) => {
      // `res` contains information about the posted message
      console.log('Message sent: ', slackRes.ts);
      res.send('Message sent!')
    });
  });
};