const venom = require('venom-bot');
const moment = require('moment');
const quranmenu = require('./quranmenu.js');
const broadcast = require('./lib/broadcast.js');
const menu = require('./menu.js');
const ai = require('./lib/ai.js');
const figlet = require('figlet');



const start = async (client = new Client()) => {


  try {
       
    console.log('-----------------------------------------------------------');
    console.log(figlet.textSync('BOT ADKHAR'));
    console.log('-----------------------------------------------------------');
    console.log("start bot adkhar", moment().format("HH:mm:ss"));   

      // برودكاست 
       await broadcast(client)



      // الأستماع الى الرسائل 

     await client.onMessage((async (message) => {
        // خدمات البوت

        await menu(client, message);
        await quranmenu(client, message);
        await ai(client, message);


     }));         
  
    }  catch(erro){
        console.error('Error when sending: ', erro);
       }
      
    }  




venom.create(
    
    'BOT ADKHAR',
    (base64Qrimg, asciiQR, attempts, urlCode) => {
        console.log('Number of attempts to read the qrcode: ', attempts);
        console.log('Terminal qrcode: ', asciiQR);
      },
      (statusSession, session) => {
        console.log('Status Session: ', statusSession);
        console.log('Session name: ', "BOT-ADKHAR");
      },

)
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });