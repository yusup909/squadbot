/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `
  *〘 Thanks To 〙*
➥ _Nurutomo:_
https://github.com/Nurutomo
➥ _Istikmal:_
https://github.com/BochilGaming
➥ _Ilman:_
https://github.com/ilmanhdyt
➥ _Ridwan:_
https://github.com/Aiinne
➥ _Rahmad:_
https://github.com/Rahmad13
➥ _Darma:_
https://github.com/Darrma23
➥ _Amirul:_ 
https://github.com/amiruldev20
➥ _Aine Team_
➥ _Dan Kawan-kawan_
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: tqto,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/tqto.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '💠 Source Code',
               url: 'https://github.com/'
             }

           },
           {
             quickReplyButton: {
               displayText: 'DONASI',
               id: '.donasi',
             }
           },
               {
             quickReplyButton: {
               displayText: 'MENU',
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
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i

module.exports = handler
