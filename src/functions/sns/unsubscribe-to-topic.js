const smsService = require('../../services/sms.service')
const { success, failure } = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  smsService
    .unsubscribeToTopic(JSON.parse(event.body))
    .then((data) => callback(null, success(data)))
    .catch((err) => callback(null, failure(err)))
}