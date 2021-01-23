let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL-Axiata [0818-0352-2862]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6281803522862
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
