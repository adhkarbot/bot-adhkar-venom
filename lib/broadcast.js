const adk = require('./adk.js');
const photo = require('./photo.js');
const videox = require('./video.js');


module.exports = broadcast = async (client) => {
  
  try {

    setInterval(async function(){ 
      const date = new Date(); 


      if ((date.getHours() === 01 && date.getMinutes() === 00) || (date.getHours() === 04 && date.getMinutes() === 00) || (date.getHours() === 19 && date.getMinutes() === 00) || (date.getHours() === 22 && date.getMinutes() === 00) || (date.getHours() === 23 && date.getMinutes() === 00)){   
        let chats = await client.getAllChats();
        for (let lop of chats) {
          let chatId = lop.id._serialized; 
          let listadk = adk[Math.floor(Math.random() * adk.length)]           
          await client.sendText(chatId, listadk)
          .then((result) => { console.log('Result: ', result); })
          .catch((erro) => { console.error('Error when sending: ', erro); });
        }
      }

      else if ((date.getHours() === 07 && date.getMinutes() === 00) || (date.getHours() === 10 && date.getMinutes() === 00) || (date.getHours() === 02 && date.getMinutes() === 00) || (date.getHours() === 05 && date.getMinutes() === 00) || (date.getHours() === 20 && date.getMinutes() === 00)){   
        let chats = await client.getAllChats();
        for (let lop of chats) {
          let chatId = lop.id._serialized; 
          let listphoto = photo[Math.floor(Math.random() * photo.length)]          
          await client.sendImage(chatId, listphoto, 'photo.jpeg', ' ­ ')
          .then((result) => { console.log('Result: ', result); })
          .catch((erro) => { console.error('Error when sending: ', erro); });
        }
      }

      else if ((date.getHours() === 13 && date.getMinutes() === 00) || (date.getHours() === 16 && date.getMinutes() === 00) || (date.getHours() === 08 && date.getMinutes() === 00) || (date.getHours() === 11 && date.getMinutes() === 00) || (date.getHours() === 14 && date.getMinutes() === 00) || (date.getHours() === 17 && date.getMinutes() === 00)){   
        let chats = await client.getAllChats();
        for (let lop of chats) {
          let chatId = lop.id._serialized; 
          let listvideo = videox[Math.floor(Math.random() * videox.length)]        
          await client.sendImage(chatId, listvideo, 'video.mp4', ' ­ ')
          .then((result) => { console.log('Result: ', result); })
          .catch((erro) => { console.error('Error when sending: ', erro); });
        }
      }

           
    } , 60000);


    } catch(erro) {
        console.log(erro)
    }
}





