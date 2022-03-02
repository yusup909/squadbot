let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let helloaine = fs.readFileSync('./media/30Bakayaro.mp3') 
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^@6281328552597$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler