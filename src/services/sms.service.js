'use strict'

const AWS = require('aws-sdk');
const sns = new AWS.SNS({ region: 'ap-southeast-2' });

const sendSMSMessage = async ({ message, sender, receiver }) => {

  var params = {
    Message: message,
    MessageAttributes: {
      'AWS.SNS.SMS.SMSType': {
        DataType: 'String',
        StringValue: 'Promotional'
      },
      'AWS.SNS.SMS.SenderID': {
        DataType: 'String',
        StringValue: sender
      },
    },
    PhoneNumber: receiver
  };

  return Promise.all((resolve, reject) => {
    sns.publish(params, (error, data) => {
      if (error)
        reject(error)
      resolve(data)
    })
  })

}

const createSNSTopic = async ({ topic }) => {

  var params = {
    Name: topic
  }

  return Promise.all((resolve, reject) => {
    sns.createTopic(params, (error, data) => {
      if (error)
        reject(error)
      resolve(data)
    })
  })

}

const deleteSNSTopic = async ({ topicArn }) => {

  var params = {
    TopicArn: topicArn
  };

  return Promise.all((resolve, reject) => {
    sns.deleteTopic(params, (error, data) => {
      if (error)
        reject(error)
      resolve(data)
    })
  })

}

const sendSMSMessageToTopic = async ({ message, sender, topicArn }) => {

  var params = {
    Message: message,
    MessageAttributes: {
      'AWS.SNS.SMS.SMSType': {
        DataType: 'String',
        StringValue: 'Promotional'
      },
      'AWS.SNS.SMS.SenderID': {
        DataType: 'String',
        StringValue: sender
      },
    },
    TopicArn: topicArn
  };
  return Promise.all((resolve, reject) => {
    sns.publish(params, (error, data) => {
      if (error)
        reject(error)
      resolve(data)
    })
  })

}

const subscribeToTopic = async ({ topicArn, phoneNumber }) => {

  var params = {
    Protocol: 'sms',
    TopicArn: topicArn,
    Endpoint: phoneNumber
  };

  return Promise.all((resolve, reject) => {
    sns.subscribe(params, (error, data) => {
      if (error)
        reject(error)
      resolve(data)
    })
  })

}

const unsubscribeToTopic = async ({ subscriptionArn }) => {

  var params = {
    SubscriptionArn: subscriptionArn
  };

  return Promise.all((resolve, reject) => {
    sns.unsubscribe(params, (error, data) => {
      if (error)
        reject(error)
      resolve(data)
    })
  })

}

module.exports = { sendSMSMessage, createSNSTopic, deleteSNSTopic, sendSMSMessageToTopic, subscribeToTopic, unsubscribeToTopic }