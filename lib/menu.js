const setting = require('./setting.js')
const menuWA = () => {
return `*===Menu Perintah `+setting.namaBot+` ===*

*===Info BOT===*
• Owner :  `+setting.namaOwner+`
• Nama Bot : `+setting.namaBot+`
• WA Owner : wa.me/`+setting.nomorOwner+`
• Repo : https://github.com/AzzharAli/EulaBOT
• Web : https://eula.my.id
• Version : 1.3
• License : ISC

✖ : Command Tidak Tersedia

*===Umum===*
-> stiker (image only!)
-> rate
-> apakah
-> kapan
-> halah
-> hilih
-> huluh
-> heleh
-> holoh

*===Random Text===*
-> bacot
-> katabijak
-> katailham
-> pantunpakboy
-> sindiran
-> quotesanime

*===Perbandaran===*
-> randomanime
-> randomgenshin
-> mobellejen ✖
-> randomnsfw
-> genshinnsfw
-> nhentai ✖
-> addwaifu
-> randomwaifu

`
}

module.exports = { menuWA };