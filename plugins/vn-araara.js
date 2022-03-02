let handler = async (m) => {
let helloaine = `${pickRandom(['https://c.top4top.io/m_2251wiuxh1.mpeg','https://d.top4top.io/m_22516y8k92.mp3'])}`.trim()
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(ara ara|ara-ara)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}