export class Queries {
  public static queries = {
		login: `
      query Login($email:String!,$password:String!) {
        credentials(email:$email,password:$password) {
          token
        }
      }
    `,
    sentMessages: `
    query SentMessages {
      sentMsgs {
        id
        fromNumber
        toNumber
        twilioSid
        body
        messageId
        templateVars
        customer {
          id
          firstName
          lastName
          phoneNumber
          email
          timezone
          createdAt
          updatedAt
        }
        txtrClient {
          id
          name
          createdAt
          updatedAt
        }
        msgType {
          id
          name
          template
          sendAfterHour
          sendBeforeHour
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
    }
    `,
  queuedMessages: `
    query QueuedMessages {
      queuedMsgs {
        id
        fromNumber
        toNumber
        messageId
        templateVars
        sendAt
        customer {
          id
          firstName
          lastName
          phoneNumber
          email
          timezone
          createdAt
          updatedAt
        }
        txtrClient {
          id
          name
          createdAt
          updatedAt
        }
        msgType {
          id
          name
          template
          sendAfterHour
          sendBeforeHour
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
    }
  `,
  receivedMessages: `
    query ReceivedMessages {
      receivedMsgs {
        id
        fromNumber
        toNumber
        twilioSid
        body
        customer {
          id
          firstName
          lastName
          phoneNumber
          email
          timezone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
    }
  `,
  messageTypes: `
    query MessageTypes {
      msgTypes {
        id
        name
        template
        sendAfterHour
        sendBeforeHour
        createdAt
        updatedAt
      }
    }
  `
  }
}