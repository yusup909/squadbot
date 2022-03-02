/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let esce = `
_*>>[ 🇮🇩 SCRIPT BOT WHATSAPP 🇮🇩 ]<<*_
_🎋Sc Bot↓_
_*Yutup bang banyak. Tinggal pilih awokwok..*_
*🏮Follow me On Instagram:*
https://instagram.com/darrma23
*🔖And visite me On:*
https://beacons.ai/darrma
_🎃This SC is under development_`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: esce,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/scriptbot.jpg') },           
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '💠 Source Code',
               url: 'https://github.com'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Ok Bang',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler


