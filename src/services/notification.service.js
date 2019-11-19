'use strict'

const { Notification } = require('../../db/models')

const getNotifications = async () => {
  try {
    const data = await Notification.findAll()
    return data
  } catch (error) {
    throw error
  }
}

module.exports = { getNotifications }