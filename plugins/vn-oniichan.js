let handler = async (m) => {
let helloaine = `${pickRandom(['https://l.top4top.io/m_2251j2qor0.mp3','https://a.top4top.io/m_2251rst9w1.mp3','https://b.top4top.io/m_2251tu1tg2.mp3','https://c.top4top.io/m_2251i04nh3.mp3','https://d.top4top.io/m_2251w06zr4.mp3','https://f.top4top.io/m_2251drh975.mp3','https://g.top4top.io/m_2251r3kor6.mp3'])}`.trim()
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^onii chan$/i
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