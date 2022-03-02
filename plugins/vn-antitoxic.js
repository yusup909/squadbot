let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let helloaine = fs.readFileSync('./media/WhatsApp-Audio-2022-03-01-at-16.51.07.mp3') 
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(asu|memek|babi|kontol|anjing|bangsat|kanjut|tolol|keparat|biadab|bajingan)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler