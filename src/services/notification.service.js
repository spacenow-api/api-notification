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

const getNotificationsByType = async (type) => {
  const where = {
    where: {
      type
    }
  }
  try {
    const data = await Notification.findAll(where)
    return data
  } catch (error) {
    throw error
  }
}

const getNotification = async (id) => {
  const where = {
    where: {
      id
    }
  }
  try {
    const data = await Notification.findOne(where)
    return data
  } catch (error) {
    throw error
  }
}

const postNotification = async (data) => {
  try {
    return await Notification.create(data)
  } catch (error) {
    throw error
  }
}

const putNotification = async (data, id) => {
  const where = {
    where: {
      id
    }
  }
  try {
    return await Notification.update(data, where)
  } catch (error) {
    throw error
  }
}

module.exports = { getNotifications, getNotificationsByType, getNotification, postNotification, putNotification }