/*BASE ORI PAKOYOFFC
RECODE BY : DARK TAKA
Buy panel ? Chat wa.me/2349052076139
Jangan Di Hapus Credit Gw
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '2349052076139'
global.nomerowner = ["2349052076139"]
global.namabot = ["𝙳𝙰𝚁𝙺 - 𝙰𝙽𝙶𝙴𝙻 - 𝙼𝙳"]

//watermark 
global.packname = '𝙼𝚊𝚍𝚎 𝚋𝚢'
global.author = '𝙳𝚊𝚛𝚔 𝙰𝚗𝚐𝚎𝚕 𝙼𝙳'
global.foter1 = '𝙼𝚞𝚕𝚝𝚒 𝙳𝚎𝚟𝚒𝚌𝚎 𝙱𝚘𝚝 𝙱𝚢 𝙳𝚊𝚛𝚔 𝚃𝚊𝚔𝚊'
global.foter2 = 'Created By 𝙳𝚊𝚛𝚔 𝚃𝚊𝚔𝚊'
global.foter3 = '𝙳𝙰𝚁𝙺-𝙰𝙽𝙶𝙴𝙻-𝙼𝙳'
global.foter4 = '𝙻𝚘𝚛𝚍 𝙳𝚊𝚛𝚔'
global.idcennel = 'https://whatsapp.com/channel/0029VamzCT5GzzKRylqvj33l'
global.wagc = 'https://whatsapp.com/channel/0029VamzCT5GzzKRylqvj33l'
global.thumb = 'https://files.catbox.moe/8sdroo.jpg'
global.thumbnail = 'https://files.catbox.moe/8sdroo.jpg'
global.url = 'https://files.catbox.moe/8sdroo.jpg'
//database 
global.urldb = 'mongodb+srv://nawdev01:putu0@botwa.q6bwloy.mongodb.net/?retryWrites=true&w=majority'; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

//mess
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owner_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})