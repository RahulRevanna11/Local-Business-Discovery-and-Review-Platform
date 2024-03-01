const accountSid = '';
const authToken = '';
const twilioPhoneNumber = '+16418631793';

const client = require('twilio')(accountSid, authToken);

// const toPhoneNumber = '+919307737822'; // Replace with the recipient's phone number
// const messageBody = 'Hello, this is a test message from Twilio!';




  const SMSSender = async (mobile, body)=>
  {
console.log(mobile);
    client.messages
    .create({
      from: twilioPhoneNumber,
      to: `+91${mobile}`,
      body: body
      
    })
    .then(message => console.log(`Message SID: ${message.sid}`))
    .catch(error => {console.error(`Error sending message: ${error.message}`)
  console.log(error);});
  }

  module.exports=SMSSender;
