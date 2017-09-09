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
    `
	}
}