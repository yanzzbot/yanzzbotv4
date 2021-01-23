let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 INFO BOT 〙
*▌║*
*▌║✙* Dibuat dengan bahasa javascript via NodeJs
*▌║✙* Rec: Yanzz Official
*▌║✙* Script: @Nurotomo
*▌║✙* Instagram: @_zxuan54
*▌║✙* YouTube: Yanzz Official
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 Thanks To 〙
*▌║✙* Nurotomo
*▌║✙* MfarelS
*▌║✙* ST4RZ
*▌║✙* OCHO BOT
*▌║✙* Dan kawan yang lain :)
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 DONASI 〙 ═
*▌║✙* Dana/Pulsa : 0818-0352-2862
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*
*▌║*>Request? Wa.me/6281803522862
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 OCHO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

