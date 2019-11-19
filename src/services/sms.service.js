'use strict'

const AWS = require('aws-sdk');
const sns = new AWS.SNS();

const sendSMSMessage = async ({message, sender, receiver}) => {

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

  sns.publish(params, (error, data) => {
    if (error)
      throw error
    return data
  })

}

const createSNSTopic = async ({topic}) => {

  var params = {
    Name: topic
  }

  sns.createTopic(params, (error, data) => {
    if (error)
      throw error
    return data
  })

}

const deleteSNSTopic = async ({topicArn}) => {

  var params = {
    TopicArn: topicArn
  };

  sns.deleteTopic(params, (error, data) => {
    if (error)
      throw error
    return data
  })

}

const sendSMSMessageToTopic = async ({message, sender, topicArn}) => {

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

  sns.publish(params, (error, data) => {
    if (error)
      throw error
    return data
  })

}

const subscribeToTopic = async ({topicArn, phoneNumber}) => {

  var params = {
    Protocol: 'sms',
    TopicArn: topicArn,
    Endpoint: phoneNumber
  };

  sns.subscribe(params, (error, data) => {
    if (error)
      throw error
    return data
  })

}

const unsubscribeToTopic = async ({subscriptionArn}) => {

  var params = {
    SubscriptionArn: subscriptionArn
  };

  sns.unsubscribe(params, (error, data) => {
    if (error)
      throw error
    return data
  })

}

module.exports = { sendSMSMessage, createSNSTopic, deleteSNSTopic, sendSMSMessageToTopic, subscribeToTopic, unsubscribeToTopic }