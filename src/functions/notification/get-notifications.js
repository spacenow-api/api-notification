const notificationService = require('../../services/notification.service')
const { success, failure } = require('../../helpers/response.utils')

module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  notificationService
    .getNotifications()
    .then((data) => callback(null, success(data)))
    .catch((err) => callback(null, failure(err)))
}