let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/ac2355f43e24c39e842f0.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "Reneasy-bot",
        "description": `       
1premium/7hari
Rp 10.000
1premium/30hari
Rp 20.000

1group/30hari
Rp 10.000
1group/60hari
Rp 20.000

Axis [6283106733687]
Telkomsel [6281334177340]
OVO [085601928437

tertarik? hubungi:
@6283106733687 (Darma)
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4487929097985377"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4487929097985377",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6283106733687@s.whatsapp.net"
        },
        "footerText": "wa.me/6283106733687"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['listharga']
handler.tags = ['main']
handler.command = /^(listharga|hargalist|sewa|sewabot)$/i

module.exports = handler