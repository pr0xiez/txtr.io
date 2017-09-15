var Queries = (function () {
    function Queries() {
    }
    return Queries;
}());
export { Queries };
Queries.queries = {
    login: "\n      query Login($email:String!,$password:String!) {\n        credentials(email:$email,password:$password) {\n          token\n        }\n      }\n    ",
    sentMessages: "\n    query SentMessages {\n      sentMsgs {\n        id\n        fromNumber\n        toNumber\n        twilioSid\n        body\n        messageId\n        templateVars\n        customer {\n          id\n          firstName\n          lastName\n          phoneNumber\n          email\n          timezone\n          createdAt\n          updatedAt\n        }\n        txtrClient {\n          id\n          name\n          createdAt\n          updatedAt\n        }\n        msgType {\n          id\n          name\n          template\n          sendAfterHour\n          sendBeforeHour\n          createdAt\n          updatedAt\n        }\n        createdAt\n        updatedAt\n      }\n    }\n    ",
    queuedMessages: "\n    query QueuedMessages {\n      queuedMsgs {\n        id\n        fromNumber\n        toNumber\n        messageId\n        templateVars\n        sendAt\n        customer {\n          id\n          firstName\n          lastName\n          phoneNumber\n          email\n          timezone\n          createdAt\n          updatedAt\n        }\n        txtrClient {\n          id\n          name\n          createdAt\n          updatedAt\n        }\n        msgType {\n          id\n          name\n          template\n          sendAfterHour\n          sendBeforeHour\n          createdAt\n          updatedAt\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  ",
    receivedMessages: "\n    query ReceivedMessages {\n      receivedMsgs {\n        id\n        fromNumber\n        toNumber\n        twilioSid\n        body\n        customer {\n          id\n          firstName\n          lastName\n          phoneNumber\n          email\n          timezone\n          createdAt\n          updatedAt\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  ",
    messageTypes: "\n    query MessageTypes {\n      msgTypes {\n        id\n        name\n        template\n        sendAfterHour\n        sendBeforeHour\n        createdAt\n        updatedAt\n      }\n    }\n  "
};
//# sourceMappingURL=queries.js.map