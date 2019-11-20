const notificationService = require('../../services/notification.service')
const { success, failure } = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  const { id } = event.pathParameters
  context.callbackWaitsForEmptyEventLoop = false
  notificationService
    .putNotification(id, JSON.parse(event.body))
    .then((data) => callback(null, success(data)))
    .catch((err) => callback(null, failure(err)))
}