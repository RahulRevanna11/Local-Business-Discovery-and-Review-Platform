const accountSid = 'AC2cdde5f750aaa4caab2e5d52b1785b3f';
const authToken = 'b13244f8fb6445696f5e222f24ac597e';
const twilioPhoneNumber = '+16418631793';

const client = require('twilio')(accountSid, authToken);

// const toPhoneNumber = '+919307737822'; // Replace with the recipient's phone number
// const messageBody = 'Hello, this is a test message from Twilio!';




  const SMSSender = async (mobile, body)=>
  {

    client.messages
    .create({
      from: twilioPhoneNumber,
      to: `+91${mobile}`,
      body: body
      
    })
    .then(message => console.log(`Message SID: ${message.sid}`))
    .catch(error => console.error(`Error sending message: ${error.message}`));
  }

  module.exports=SMSSender;