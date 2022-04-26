const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  console.log('event', event)
  for (const streamedItem of event.Records) {
    console.log('streamedItem', streamedItem)
    if (streamedItem.eventName === 'INSERT') {
      console.log('streamedItem.dynamodb.NewImage', streamedItem.dynamodb.NewImage)
      const streamedItemKeys = Object.keys(streamedItem.dynamodb.NewImage)
      const inquirerName = streamedItemKeys.some(h => h === 'name') ? streamedItem.dynamodb.NewImage.name.S : 'None'
      const inquirerEmail = streamedItemKeys.some(h => h === 'email') ? streamedItem.dynamodb.NewImage.email.S : 'None'
      const inquirerPhone = streamedItemKeys.some(h => h === 'phone') ? streamedItem.dynamodb.NewImage.phone.S : 'None'
      const inquirerMessage = streamedItemKeys.some(h => h === 'message') ? streamedItem.dynamodb.NewImage.message.S : 'None'
      console.log('inquirerName', inquirerName)
      console.log('inquirerEmail', inquirerEmail)
      console.log('inquirerPhone', inquirerPhone)
      console.log('inquirerMessage', inquirerMessage)
      await ses
        .sendTemplatedEmail({
          Destination: {
            ToAddresses: [process.env.SES_DESTINATION_EMAIL],
          },
          Source: process.env.SES_FROM_EMAIL,
          Template: "FormSubmission",
          TemplateData: `{ \"inquirerName\":\"${inquirerName}\", \"inquirerEmail\":\"${inquirerEmail}\", \"inquirerPhone\":\"${inquirerPhone}\", \"inquirerMessage\":\"${inquirerMessage}\" }`
        })
        .promise()
    }
  }
  return { status: 'done' }
}

