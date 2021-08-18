const fs = require('fs-extra');
const mime = require('mime-types');
const txtt = require('./lib/txtt.js');
const adk = require('./lib/adk.js');
const photo = require('./lib/photo.js');
const videox = require('./lib/video.js');
const sticker = require('./sticker.js');

module.exports = menu = async (client, message) => {

    try {

        
        const txt = message.body.toLowerCase()
        const from = message.from;
        const isGroupMsg = message.isGroupMsg;
        const chat = message.chat;
        const id = message.id;
        const sender = message.sender;
        const comn = message.body.toLowerCase().split(' ')[0] || ''
        const owner = ["966559298917@c.us"];
        const isOwner = owner.includes(sender.id);
        const g2 = message.body.trim().split(/ +/).slice(1);
        const gs = message.body.split(' ');
        const quotedMsgObj = message.quotedMsgObj;
        const isMedia = message.isMedia;  
        const mimetype = message.mimetype;
         
            if (txt === "hi" || txt === "مرحبا" || txt === "بوت"){
                 await client.sendText(from, txtt.t3)
                

             }

             else if (txt === "أذكار الصباح" || txt === "اذكار الصباح" || txt == "2") {
                await client.sendText(from, txtt.t2)
                .then((result) => { console.log('Result: ', result); })
                .catch((erro) => { console.error('Error when sending: ', erro); });
              }

             else if (txt === "أذكار المساء" || txt === "اذكار المساء" || txt == "3") {
                await client.sendText(from, txtt.t1)
                .then((result) => { console.log('Result: ', result); })
                 .catch((erro) => { console.error('Error when sending: ', erro); });
                
             }

             else if (txt === "اذكار" || txt === "ذكر" || txt === "4"){
                let listadk = adk[Math.floor(Math.random() * adk.length)]
                client.reply(from, listadk, id.toString())
                .then((result) => { console.log('Result: ', result); })
                .catch((error) => { console.error('Error when sending: ', error); });
               }
            
             else if (txt === "صور" || txt === "صور عشوائية" || txt === "5"){
                let listphoto = photo[Math.floor(Math.random() * photo.length)]
                await client.sendFile(from,listphoto, 'photo.jpeg', ' ­ ')
                .then((result) => { console.log('Result: ', result); })
                .catch((error) => { console.error('Error when sending: ', error); });
               }
            
             else if (txt === "فيديو" || txt == "6"){
                let listvideo = videox[Math.floor(Math.random() * videox.length)]
                await client.sendFile(from,listvideo, 'video.mp4', ' ­ ')
                .then((result) => { console.log('Result: ', result); })
                .catch((error) => { console.error('Error when sending: ', error); });
               }
        
             else if (txt === "ملصق" || txt == "7"){
                let liststicker = sticker[Math.floor(Math.random() * sticker.length)]
                await client.sendImageAsSticker(from,liststicker)
                .then((result) => { console.log('Result: ', result); })
                .catch((error) => { console.error('Error when sending: ', error); });
               }


            else if (comn === "بث") {

                const isQuoted = quotedMsgObj && quotedMsgObj.type === 'image' || quotedMsgObj && quotedMsgObj.type === 'video' || quotedMsgObj && quotedMsgObj.type === 'audio'
    
                if (!isOwner) return await client.sendText(from, 'هذه الميزة للـ owner فقط')
                    if ((isMedia || isQuoted) && gs.length >= 1) {
                        const tMedia = isQuoted ? quotedMsgObj : message
                        const _mimetype = isQuoted ? quotedMsgObj.mimetype : mimetype
                        let chats = await client.getAllChats();
                        const msg = g2.join(" ")
                        const mediaData = await client.decryptFile(tMedia);
                        const filex = `./files/bth_${message.sender.id}.${mime.extension(_mimetype)}`
                        await fs.writeFile(filex, mediaData , async (err) => {      
                            for (let lop of chats) {    
                                let chatId = lop.id._serialized    
                                await client.sendFile(chatId, filex, filex, `${msg}`)
                                .then((result) => { console.log('Result: ', result); })
                                .catch((erro) => { console.error('Error when sending: ', erro); });
                            }                                
                            await client.sendText(from, 'تم نشر الرسالة!')
                        })           
                    } 
                        
                    else if (g2.length >= 1) {
                        const msg = g2.join(" ")
                        let chats = await client.getAllChats();
                        for (let lop of chats) {
                            let chatId = lop.id._serialized; 
                            await client.sendText(chatId, `${msg}`)
                            .then((result) => { console.log('Result: ', result); })
                            .catch((erro) => { console.error('Error when sending: ', erro); });
                        }
                        await client.sendText(from, 'تم نشر الرسالة!')
                    }
            } 
            

            

    } catch(erro){
           
    }

}
