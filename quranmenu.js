const quran = require('./lib/quran.js');

module.exports =

async (client, message) => {
    const { id, from, caption} = message;
    let {body} = message;
    const qurancommand = caption || body || '';
    
      try {
  
        switch (qurancommand) {

            case 'القرآن الكريم':
             
             await client.sendText(from, quran.q115)
             break;
         
             case 'قرآن':
             
             await client.sendText(from, quran.q115)
             break;
         
             case 'قرآن كريم':
             
             await client.sendText(from, quran.q115)
             break;

             case 'قران':
             
             await client.sendText(from, quran.q115)
             break;

             case 'القران الكريم':
             
             await client.sendText(from, quran.q115)
             break;

             case '1':
             
             await client.sendText(from, quran.q115)
             break;
            
             case 'الفاتحة':
           
           await client.reply(from, quran.q1, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/001.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           
           break;
           case 'البقرة':
           
           await client.reply(from, quran.q2, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/002.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'آل عمران':
           
           await client.reply(from, quran.q3, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/003.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'النساء':
           
           await client.reply(from, quran.q4, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/004.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'المائدة':
           
           await client.reply(from, quran.q5, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/005.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الأنعام':
           
           await client.reply(from, quran.q6, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/006.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الأعراف':
           
           await client.reply(from, quran.q7, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/007.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الأنفال':
           
           await client.reply(from, quran.q8, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/008.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'التوبة':
           
           await client.reply(from, quran.q9, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/009.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'يونس':
           
           await client.reply(from, quran.q10, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/010.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'هود':
           
           await client.reply(from, quran.q11, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/011.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'يوسف':
           
           await client.reply(from, quran.q12, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/012.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });         
           break;
           case 'الرعد':
           
           await client.reply(from, quran.q13, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/013.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'إبراهيم':
           
           await client.reply(from, quran.q14, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/014.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الحجر':
           
           await client.reply(from, quran.q15, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/015.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'النحل':
           
           await client.reply(from, quran.q16, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/016.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الإسراء':
           
           await client.reply(from, quran.q17, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/017.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الكهف':
           
           await client.reply(from, quran.q18, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/018.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'مريم':
           
           await client.reply(from, quran.q19, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/019.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'طه':
           
           await client.reply(from, quran.q20, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/020.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الأنبياء':
           
           await client.reply(from, quran.q21, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/021.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الحج':
           
           await client.reply(from, quran.q22, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/022.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'المؤمنون':
           
           await client.reply(from, quran.q23, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/023.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'النور':
           
           await client.reply(from, quran.q24, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/024.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الفرقان':
           
           await client.reply(from, quran.q25, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/025.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الشعراء':
           
           await client.reply(from, quran.q26, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/026.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'النمل':
           
           await client.reply(from, quran.q27, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/027.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'القصص':
           
           await client.reply(from, quran.q28, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/028.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'العنكبوت':
           
           await client.reply(from, quran.q29, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/029.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الروم':
           
           await client.reply(from, quran.q30, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/030.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'لقمان':
           
           await client.reply(from, quran.q31, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/031.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'السجدة':
           
           await client.reply(from, quran.q32, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/032.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الأحزاب':
           
           await client.reply(from, quran.q33, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/033.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'سبأ':
           
           await client.reply(from, quran.q34, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/034.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'فاطر':
           
           await client.reply(from, quran.q35, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/035.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'يس':
           
           await client.reply(from, quran.q36, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/036.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'الصافات':
           
           await client.reply(from, quran.q37, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/037.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'ص':
           
           await client.reply(from, quran.q38, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/038.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'الزمر':
           
           await client.reply(from, quran.q39, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/039.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'غافر':
           
           await client.reply(from, quran.q40, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/040.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'فصلت':
           
           await client.reply(from, quran.q41, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/041.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الشورى':
           
           await client.reply(from, quran.q42, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/042.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الزخرف':
           
           await client.reply(from, quran.q43, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/043.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الدخان':
           
           await client.reply(from, quran.q44, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/044.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الجاثية':
           
           await client.reply(from, quran.q45, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/045.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الأحقاف':
           
           await client.reply(from, quran.q46, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/046.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'محمد':
           
           await client.reply(from, quran.q47, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/047.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الفتح':
           
           await client.reply(from, quran.q48, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/048.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الحجرات':
           
           await client.reply(from, quran.q49, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/049.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'ق':
           
           await client.reply(from, quran.q50, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/050.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الذاريات':
           
           await client.reply(from, quran.q51, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/051.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'الطور':
           
           await client.reply(from, quran.q52, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/052.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'النجم':
           
           await client.reply(from, quran.q53, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/053.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'القمر':
           
           await client.reply(from, quran.q54, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/054.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'الرحمن':
           
           await client.reply(from, quran.q55, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/055.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الواقعة':
           
           await client.reply(from, quran.q56, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/056.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الحديد':
           
           await client.reply(from, quran.q57, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/057.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'المجادلة':
           
           await client.reply(from, quran.q58, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/058.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'الحشر':
           
           await client.reply(from, quran.q59, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/059.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'الممتحنة':
           
           await client.reply(from, quran.q60, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/060.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'الصف':
           
           await client.reply(from, quran.q61, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/061.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الجمعة':
           
           await client.reply(from, quran.q62, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/062.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'المنافقون':
           
           await client.reply(from, quran.q63, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/063.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });     
           break;
           case 'التغابن':
           
           await client.reply(from, quran.q64, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/064.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الطلاق':
           
           await client.reply(from, quran.q65, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/065.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'التحريم':
           
           await client.reply(from, quran.q66, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/066.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الملك':
           
           await client.reply(from, quran.q67, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/067.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'القلم':
           
           await client.reply(from, quran.q68, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/068.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الحاقة':
           
           await client.reply(from, quran.q69, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/069.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'المعارج':
           
           await client.reply(from, quran.q70, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/070.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'نوح':
           
           await client.reply(from, quran.q71, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/071.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الجن':
           
           await client.reply(from, quran.q72, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/072.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'المزمل':
           
           await client.reply(from, quran.q73, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/073.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'المدثر':
           
           await client.reply(from, quran.q74, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/074.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'القيامة':
           
           await client.reply(from, quran.q75, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/075.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); }); 
           break;
           case 'الإنسان':
           
           await client.reply(from, quran.q76, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/076.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'المرسلات':
        
           await client.reply(from, quran.q77, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/077.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });  
           break;
           case 'النبأ':
           
           await client.reply(from, quran.q78, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/078.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });  
           break;
           case 'النازعات':
           
           await client.reply(from, quran.q79, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/079.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'عبس':
           
           await client.reply(from, quran.q80, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/080.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'التكوير':
           
           await client.reply(from, quran.q81, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/081.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });  
           break;
           case 'الانفطار':
           
           await client.reply(from, quran.q82, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/082.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); }); 
           break;
           case 'المطففين':
           
           await client.reply(from, quran.q83, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/083.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الانشقاق':
           
           await client.reply(from, quran.q84, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/084.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'البروج':
           
           await client.reply(from, quran.q85, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/085.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });  
           break;
           case 'الطارق':
           
           await client.reply(from, quran.q86, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/086.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الأعلى':
           
           await client.reply(from, quran.q87, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/087.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });  
           break;
           case 'الغاشية':
           
           await client.reply(from, quran.q88, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/088.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الفجر':
           
           await client.reply(from, quran.q89, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/089.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); }); 
           break;
           case 'البلد':
           
           await client.reply(from, quran.q90, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/090.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الشمس':
           
           await client.reply(from, quran.q91, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/091.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'الليل':
           
           await client.reply(from, quran.q92, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/092.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); }); 
           break;
           case 'الضحى':
           
           await client.reply(from, quran.q93, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/093.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'الشرح':
           
           await client.reply(from, quran.q94, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/094.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });   
           break;
           case 'التين':
           
           await client.reply(from, quran.q95, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/095.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); }); 
           break;
           case 'العلق':
           
           await client.reply(from, quran.q96, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/096.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); }); 
           break;
           case 'القدر':
           
           await client.reply(from, quran.q97, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/097.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });    
           break;
           case 'البينة':
           
           await client.reply(from, quran.q98, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/098.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'الزلزلة':
           
           await client.reply(from, quran.q99, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/099.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'العاديات':
           
           await client.reply(from, quran.q100, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/100.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'القارعة':
           
           await client.reply(from, quran.q101, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/101.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'التكاثر':
           
           await client.reply(from, quran.q102, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/102.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'العصر':
           
           await client.reply(from, quran.q103, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/103.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); }); 
           break;
           case 'الهمزة':
           
           await client.reply(from, quran.q104, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/104.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'الفيل':
           
           await client.reply(from, quran.q105, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/105.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'قريش':
           
           await client.reply(from, quran.q106, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/106.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'الماعون':
           
           await client.reply(from, quran.q107, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/107.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'الكوثر':
           
           await client.reply(from, quran.q108, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/108.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); }); 
           break;
           case 'الكافرون':
           
           await client.reply(from, quran.q109, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/109.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'النصر':
           
           await client.reply(from, quran.q110, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/110.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
           case 'المسد':
           
           await client.reply(from, quran.q111, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/111.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); }); 
           break;
           case 'الإخلاص':
           
           await client.reply(from, quran.q112, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/112.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });  
           break;
           case 'الفلق':
           
           await client.reply(from, quran.q113, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/113.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });  
           break;
           case 'الناس':
           
           await client.reply(from, quran.q114, id)
           await client.sendFile(from,'http://bot.rn0x.com/bot/lib/quran/quranmp3/114.mp3', 'file.mp3', 'file.mp3', id).then((result) => { console.log('Result: ', result); })
           .catch((error) => { console.error('Error when sending: ', error); });
           break;
            
             
         }

  
    } catch(erro) {
          console.log(erro)
        }
    
}


