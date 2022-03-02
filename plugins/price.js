const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let premium = `
*THIS BOT PRICE*

◩ *FREE USER*
 ❎ Unlimited Limit
 ❎ Premium User 
 ❎ Add Bot to Group 
  
◩ *PREMIUM USER*
 ✅ Unlimited Limit 
 ✅ Premium User 
 ❎ Add Bot to Group 
    ▹ *1Group Rp 10.000*
     Expired 30 hari
    ▹ *1Group Rp 20.000*
     Expired 60 hari

 Order | hub : owner
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: premium,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/darma.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'DONASI',
               url: 'https://wa.me/p/4487929097985377/6283106733687'
             }

           },
               {
             quickReplyButton: {
               displayText: 'OWNER',
               id: '.owner',
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
handler.help = ['price']
handler.tags = ['premium']
handler.command = /^(price)$/i

module.exports = handler
