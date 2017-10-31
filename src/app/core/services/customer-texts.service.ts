import { Injectable } from '@angular/core'

@Injectable()
export class CustomerTextsService {
  sentMessages = [
    {
      "id": 1,
      "toNumber": "+18567614495",
      "body": "Good morning! Your assessment is scheduled for 1/1/2017 between 2:00PM and 4:54PM . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: FEDCBA at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-24T12:32:43.085Z",
      "customer": {
        "firstName": "Kipp",
        "lastName": "Silber"
      }
    },
    {
      "id": 67,
      "toNumber": "+18597072496",
      "body": "Good afternoon! Your assessment is scheduled for 09/01/2017 between 11:00:00 and 12:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: YLEUED at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-30T19:42:58.204Z",
      "customer": {
        "firstName": "Clayton",
        "lastName": "Richards"
      }
    },
    {
      "id": 2,
      "toNumber": "+18567614495",
      "body": "Good morning! Thank you for considering Lowe's for your new project! To schedule your assessment please click the link below and enter your code: FEDCBA  https://scheduling.united-installs.com  otherwise you will receive a call from us by tomorrow to schedule. ",
      "createdAt": "2017-08-24T13:00:13.587Z",
      "customer": {
        "firstName": "Kipp",
        "lastName": "Silber"
      }
    },
    {
      "id": 3,
      "toNumber": "+18567614495",
      "body": "Good afternoon! Thank you for considering Lowe's for your new project! To schedule your assessment please click the link below and enter your code: ABCDEF  https://scheduling.united-installs.com  otherwise you will receive a call from us by Monday to schedule. ",
      "createdAt": "2017-08-25T16:51:49.171Z",
      "customer": {
        "firstName": "Kipp",
        "lastName": "Silber"
      }
    },
    {
      "id": 101,
      "toNumber": "+18594925926",
      "body": "Good evening! Thank you for considering Lowe's for your new project! To schedule your assessment please click the link below and enter your code: CAGRJE  https://scheduling.united-installs.com  otherwise you will receive a call from us by tomorrow to schedule. ",
      "createdAt": "2017-08-31T20:10:14.048Z",
      "customer": {
        "firstName": "Tony",
        "lastName": "Bell"
      }
    },
    {
      "id": 68,
      "toNumber": "+18595882525",
      "body": "Good afternoon! Your assessment is scheduled for 09/01/2017 between 08:00:00 and 09:59:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: SQXPVE at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-30T19:43:58.224Z",
      "customer": {
        "firstName": "Neal",
        "lastName": "Techau"
      }
    },
    {
      "id": 4,
      "toNumber": "+18567614495",
      "body": "Good afternoon! Your assessment is scheduled for 1/1/2017 between 10:00AM and 11:00AM . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: ABCDEF at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-25T16:56:19.111Z",
      "customer": {
        "firstName": "Kipp",
        "lastName": "Silber"
      }
    },
    {
      "id": 126,
      "toNumber": "+15132359545",
      "body": "Good evening! Your assessment is scheduled for 09/05/2017 between 16:00:00 and 18:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: IJCGMD at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-01T20:57:30.777Z",
      "customer": {
        "firstName": "Jennifer",
        "lastName": "Boles"
      }
    },
    {
      "id": 153,
      "toNumber": "+18592271354",
      "body": "Good afternoon! Your assessment is scheduled for 09/07/2017 between 09:30:00 and 10:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: RJZCPN at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-02T16:47:09.658Z",
      "customer": {
        "firstName": "Christine",
        "lastName": "Mcdonald"
      }
    },
    {
      "id": 127,
      "toNumber": "+15023161372",
      "body": "Good evening! Thank you for considering Lowe's for your new project! To schedule your assessment please click the link below and enter your code: GLQZWJ  https://scheduling.united-installs.com  otherwise you will receive a call from us by Monday to schedule. ",
      "createdAt": "2017-09-01T22:05:32.656Z",
      "customer": {
        "firstName": "Pamela",
        "lastName": "Funk"
      }
    },
    {
      "id": 197,
      "toNumber": "+18599160384",
      "body": "Good morning! Your assessment is scheduled for 09/14/2017 between 14:00:00 and 16:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: NZVLFY at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-03T13:04:18.787Z",
      "customer": {
        "firstName": "Daria",
        "lastName": "Johnson"
      }
    },
    {
      "id": 228,
      "toNumber": "+18596201867",
      "body": "Good evening! Your assessment is scheduled for 09/07/2017 between 14:00:00 and 16:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: PMUDBV at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-03T21:54:14.315Z",
      "customer": {
        "firstName": "Travis",
        "lastName": "Lambert"
      }
    },
    {
      "id": 346,
      "toNumber": "+12704657539",
      "body": "Good evening! Thank you for considering Lowe's for your new project! To schedule your assessment please click the link below and enter your code: ZWRHXH  https://scheduling.united-installs.com  otherwise you will receive a call from us by tomorrow to schedule. ",
      "createdAt": "2017-09-05T21:30:13.576Z",
      "customer": {
        "firstName": "Gae",
        "lastName": "Nolley"
      }
    },
    {
      "id": 69,
      "toNumber": "+18595397337",
      "body": "Good afternoon! Thank you for considering Lowe's for your new project! To schedule your assessment please click the link below and enter your code: CXJBCE  https://scheduling.united-installs.com  otherwise you will receive a call from us by tomorrow to schedule. ",
      "createdAt": "2017-08-30T19:55:28.711Z",
      "customer": {
        "firstName": "Steve",
        "lastName": "Pruitt"
      }
    },
    {
      "id": 5,
      "toNumber": "+18567614495",
      "body": "Good afternoon! Your assessment is scheduled for 1/1/2017 between 10:00AM and 11:00AM . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: ABCDEF at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-25T16:57:19.179Z",
      "customer": {
        "firstName": "Kipp",
        "lastName": "Silber"
      }
    },
    {
      "id": 102,
      "toNumber": "+18594925926",
      "body": "Good evening! Your assessment is scheduled for 09/01/2017 between 14:00:00 and 16:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: CAGRJE at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-31T20:46:15.260Z",
      "customer": {
        "firstName": "Tony",
        "lastName": "Bell"
      }
    },
    {
      "id": 6,
      "toNumber": "+18595363694",
      "body": "Good afternoon! Your assessment is scheduled for 08/29/2017 between 10:00:00 and 11:59:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: YSIFQH at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-25T19:44:24.712Z",
      "customer": {
        "firstName": "Bob",
        "lastName": "Willims"
      }
    },
    {
      "id": 70,
      "toNumber": "+15023820153",
      "body": "Good evening! Your assessment is scheduled for 09/04/2017 between 12:00:00 and 13:59:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: FIBWWU at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-30T20:49:30.546Z",
      "customer": {
        "firstName": "Gary",
        "lastName": "La fleur"
      }
    },
    {
      "id": 7,
      "toNumber": "+18594214170",
      "body": "Good afternoon! Your assessment is scheduled for 08/31/2017 between 14:00:00 and 16:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: NGIDEA at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-25T19:51:24.916Z",
      "customer": {
        "firstName": "Lori",
        "lastName": "Baumgardner"
      }
    },
    {
      "id": 103,
      "toNumber": "+18594925926",
      "body": "Good evening! Your assessment is scheduled for 09/01/2017 between 14:00:00 and 16:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: CAGRJE at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-31T20:46:15.276Z",
      "customer": {
        "firstName": "Tony",
        "lastName": "Bell"
      }
    },
    {
      "id": 104,
      "toNumber": "+18594925926",
      "body": "Good evening! Your assessment is scheduled for 09/01/2017 between 14:00:00 and 16:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: CAGRJE at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-31T20:46:15.302Z",
      "customer": {
        "firstName": "Tony",
        "lastName": "Bell"
      }
    },
    {
      "id": 128,
      "toNumber": "+13154899833",
      "body": "Good evening! Your assessment is scheduled for 09/12/2017 between 08:00:00 and 09:59:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: LUFKYG at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-01T22:16:33.481Z",
      "customer": {
        "firstName": "Jerry",
        "lastName": "& gabrielle mcclain"
      }
    },
    {
      "id": 154,
      "toNumber": "+18596631587",
      "body": "Good afternoon! Your assessment is scheduled for 09/07/2017 between 10:00:00 and 11:59:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: KHDWPP at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-02T17:06:40.220Z",
      "customer": {
        "firstName": "Jenny",
        "lastName": "Adams"
      }
    },
    {
      "id": 129,
      "toNumber": "+18592484507",
      "body": "Good evening! Your assessment is scheduled for 09/04/2017 between 08:00:00 and 09:59:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: CFZIVB at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-01T23:22:05.127Z",
      "customer": {
        "firstName": "Deana",
        "lastName": "Barnhart"
      }
    },
    {
      "id": 264,
      "toNumber": "+18593510961",
      "body": "Good afternoon! Your assessment is scheduled for 09/08/2017 between 10:00:00 and 11:59:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: VHTNBR at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-04T17:57:52.564Z",
      "customer": {
        "firstName": "Brian",
        "lastName": "Jones"
      }
    },
    {
      "id": 198,
      "toNumber": "+18596442502",
      "body": "Good morning! Your assessment is scheduled for 09/04/2017 between 10:00:00 and 11:59:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: GZHDID at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-03T13:04:18.815Z",
      "customer": {
        "firstName": "Barry",
        "lastName": "Edwards"
      }
    },
    {
      "id": 307,
      "toNumber": "+18594960287",
      "body": "Good morning! Your assessment is scheduled for 10/30/2017 between 14:00:00 and 16:00:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: YYVPEL at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-09-05T13:18:58.262Z",
      "customer": {
        "firstName": "Sara",
        "lastName": "Mccarthy"
      }
    },
    {
      "id": 528,
      "toNumber": "+13049824351",
      "body": "Good evening! Thank you for considering Lowe's for your new project! To schedule your assessment please click the link below and enter your code: BMTXCX  https://scheduling.united-installs.com  otherwise you will receive a call from us by tomorrow to schedule. ",
      "createdAt": "2017-09-07T20:05:17.554Z",
      "customer": {
        "firstName": "Beth",
        "lastName": "Samples"
      }
    },
    {
      "id": 8,
      "toNumber": "+18596470812",
      "body": "Good evening! Your assessment is scheduled for 08/29/2017 between 08:00:00 and 09:59:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: MUSEWI at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-26T00:13:32.513Z",
      "customer": {
        "firstName": "Kelly",
        "lastName": "Davis"
      }
    },
    {
      "id": 14,
      "toNumber": "+18595761180",
      "body": "Good evening! Your assessment is scheduled for 08/28/2017 between 09:00:00 and 09:30:00 . Thank you for considering Lowe's for your new project! To manage your scheduled data please enter your code: GHRDNM at the following link. https://scheduling.united-installs.com  .",
      "createdAt": "2017-08-27T20:30:20.194Z",
      "customer": {
        "firstName": "Jim",
        "lastName": "Burkhardt"
      }
    }
  ]
}