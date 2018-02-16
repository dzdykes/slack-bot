const slackMessage = require('./slack_message');

module.exports = function(app) {
  slackMessage(app);
  // Other route groups could go here, in the future
};