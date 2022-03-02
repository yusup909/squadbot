const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Kang Owner;;;'
                    + 'FN:Kang Owner\n' // full name
                    + 'ORG:Darr;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6283106733687:+62 831-0673-3687\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Darma', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
