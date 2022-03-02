let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let helloaine = fs.readFileSync('./media/WhatsApp-Audio-2021-03-02-at-20.46.15.opus') 
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(assalamualaikum|as'salamualaikum|asalamualaikum|salamualaikum|assalamu'alaikum)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler