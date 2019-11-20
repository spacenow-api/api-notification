const notificationService = require('../../services/notification.service')
const { success, failure } = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  const { type } = event.queryStringParameters
  context.callbackWaitsForEmptyEventLoop = false
  notificationService
    .getNotificationsByType(type)
    .then((data) => callback(null, success(data)))
    .catch((err) => callback(null, failure(err)))
}