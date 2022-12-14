const setting = require("./lib/setting.js")
const menu = require('./lib/menu.js').menuWA();
const random  = require('./lib/random.js')
const { Client, LocalAuth, MessageMedia, ChatTypes } = require('whatsapp-web.js');
const axios = require ('axios');
const fs = require('fs');
const trigger = setting.trigger;
const salahFormat = setting.salahFormat;
const pesanTunggu = setting.pesanTunggu;
const {bacotMenu, kataBijakMenu, kataIlhamMenu, pantunPakBoyMenu, sindiranMenu, quotesAnimeMenu} = require("./lib/akuariAPI.js");
const {artRandomSFWMenu,artRandomNSFWMenu,artGenshinSFWMenu,artGenshinNSFWMenu} = require('./lib/eulaAPI.js');
const {addWaifu, sendWaifu} = require('./lib/localFile.js');
const { measureMemory } = require("vm");
module.exports = {eula} = async(client, message) =>{
    let isiPesan = message.body;
    let d = new Date();
    let waktuSekarang = d.getDay() + "" + d.getMonth() + "" + d.getFullYear()+ "_" + d.getHours() + "" + d.getMinutes() + "" + d.getSeconds();
    const kontak = await message.getContact();
    const nama = kontak.pushname;
    const nomor = kontak.number;
    //Menu
    if(isiPesan.includes( trigger + "menu")){
        const chat = await message.getChat();
        chat.sendMessage(menu);
    }
    //Stiker
    if(isiPesan.includes(trigger+'stiker') || isiPesan.includes(trigger+'sticker')){
        const chat = await message.getChat();
        let cmd = isiPesan.split('/');
        let stickerNames;
        if(cmd.length < 2){
            stickerNames = "EulaBOT";
        }else{
            stickerNames = cmd[1];
        }
        if(message.hasMedia){
            const media = await message.downloadMedia();
            const files = "media/stiker/"+nama + "-" + waktuSekarang + ".jpg";
            console.log("log : "+nama + " Melakukan Request Sticker");
            const imageData = media.data;
            const buffer = Buffer.from(imageData, "base64");
            if(media){
                fs.writeFile(files, buffer, err => {
                    if (err) {
                      console.error(err);
                    }
                     //file written successfully
                  });
                chat.sendMessage(media, {sendMediaAsSticker: true, stickerName: stickerNames, stickerAuthor : 'EulaBOT by AHANG'});
                console.log('log : Berhasil Konversi Stiker');
            }
        }else{
            chat.sendMessage("*"+salahFormat+"*\nKirim Gambar dengan Caption : " + trigger + "stiker/Nama Stiker");
        }
    }
    //Rate
    if(isiPesan.includes( trigger + "rate")){
        const chat = await message.getChat();
        let tompo = isiPesan.split('/');
        if(tompo.length < 2){
            chat.sendMessage("*"+salahFormat+"*\ncontoh : "+trigger+"rate/Ketek Yelan Wangi");
        }else{
            let pesanan = "Rate " + tompo[1] + " : " + random.persenMenu() + "%";
            chat.sendMessage(pesanan);
            console.log('log : '+pesanan);
        }

    }
    //Apakah
    if(isiPesan.includes( trigger + "apakah")){
        const chat = await message.getChat();
        let tompo = isiPesan.split('/');
        if(tompo.length < 2){
            chat.sendMessage("*"+salahFormat+"*\ncontoh : "+trigger+"apakah/Conis adalah lolicon");
        }else{
            if(isiPesan.includes('eula') || isiPesan.includes('wangi')){
                let pesanan = "Apakah " + tompo + " : " + "Iya";
                console.log('log : ada yang tanya apakah eula wangi');
                chat.sendMessage(pesanan);
            }else{
                let pesanan = "Apakah " + tompo[1] + " : " + random.apakahMenu();
                chat.sendMessage(pesanan);
                console.log('log : '+pesanan);
            }
        }
    }
    //Kapan
    if(isiPesan.includes( trigger + "kapan")){
        const chat = await message.getChat();
        let tompo = isiPesan.split('/');
        if(tompo.length < 2){
            chat.sendMessage("*"+salahFormat+"*\ncontoh : "+trigger+"kapan/Jokowi Bayar Utang");
        }else{
            let pesanan = "Kapan " + tompo[1] + " : " + random.kapanMenu();
            console.log('log : ' + pesanan);
            chat.sendMessage(pesanan);

        }
    }
    //halah
    if(isiPesan.includes( trigger + "halah")){
        const chat = await message.getChat();
        let tompo = isiPesan.split('/');
        if(tompo.length < 2){
            chat.sendMessage("*"+salahFormat+"*\ncontoh : "+trigger+"halah/Kenapa Anjing disebut Anjing");
        }else{
            let pesanan = random.halahMenu(tompo[1]);
            console.log('log : ' + pesanan);
            chat.sendMessage(pesanan);

        }
    }
    //hilih
    if(isiPesan.includes( trigger + "hilih")){
        const chat = await message.getChat();
        let tompo = isiPesan.split('/');
        if(tompo.length < 2){
            chat.sendMessage("*"+salahFormat+"*\ncontoh : "+trigger+"hilih/Kenapa Anjing disebut Anjing");
        }else{
            let pesanan = random.hilihMenu(tompo[1]);
            console.log('log : ' + pesanan);
            chat.sendMessage(pesanan);

        }
    }
    //huluh
    if(isiPesan.includes( trigger + "huluh")){
        const chat = await message.getChat();
        let tompo = isiPesan.split('/');
        if(tompo.length < 2){
            chat.sendMessage("*"+salahFormat+"*\ncontoh : "+trigger+"huluh/Kenapa Anjing disebut Anjing");
        }else{
            let pesanan = random.huluhMenu(tompo[1]);
            console.log('log : ' + pesanan);
            chat.sendMessage(pesanan);

        }
    }
    //heleh
    if(isiPesan.includes( trigger + "heleh")){
        const chat = await message.getChat();
        let tompo = isiPesan.split('/');
        if(tompo.length < 2){
            chat.sendMessage("*"+salahFormat+"*\ncontoh : "+trigger+"heleh/Kenapa Anjing disebut Anjing");
        }else{
            let pesanan = random.helehMenu(tompo[1]);
            console.log('log : ' + pesanan);
            chat.sendMessage(pesanan);

        }
    }
    //holoh
    if(isiPesan.includes( trigger + "holoh")){
        const chat = await message.getChat();
        let tompo = isiPesan.split('/');
        if(tompo.length < 2){
            chat.sendMessage("*"+salahFormat+"*\ncontoh : "+trigger+"holoh/Kenapa Anjing disebut Anjing");
        }else{
            let pesanan = random.holohMenu(tompo[1]);
            console.log('log : ' + pesanan);
            chat.sendMessage(pesanan);

        }
    }
    //Bacot
    if(isiPesan.includes( trigger + "bacot")){
        const chat = await message.getChat();
        const res = await bacotMenu();
        const pesan = res.result;
        console.log('log : Berhasil Mengirim Bacotan');
        chat.sendMessage(pesan);
    }
    //Kata Bijak
    if(isiPesan.includes( trigger + "katabijak")){
        const chat = await message.getChat();
        const res = await kataBijakMenu();
        const pesan = res.quotes + "\n\n-"+res.author;
        console.log('log : Berhasil Mengirim KataBijak');
        chat.sendMessage(pesan);
    }
    //Kata Bijak
    if(isiPesan.includes( trigger + "katailham")){
        const chat = await message.getChat();
        const res = await kataIlhamMenu();
        const pesan = res.result;
        console.log('log : Berhasil Mengirim KataIlham');
        chat.sendMessage(pesan);
    }
    //Pantun Pak Boy
    if(isiPesan.includes( trigger + "pantunpakboy")){
        const chat = await message.getChat();
        const res = await pantunPakBoyMenu();
        const pesan = res.result;
        console.log('log : Berhasil Mengirim PantunPakBoy');
        chat.sendMessage(pesan);
    }
    //Sindiran
    if(isiPesan.includes( trigger + "sindiran")){
        const chat = await message.getChat();
        const res = await sindiranMenu();
        const pesan = res.result;
        console.log('log : Berhasil Mengirim Sindiran');
        chat.sendMessage(pesan);
    }
    //Quotes Anime
    if(isiPesan.includes( trigger + "quotesanime")){
        const chat = await message.getChat();
        const res = await quotesAnimeMenu();
        const img = res.img;
        const caption = res.quotes+"\n\n- "+res.char_name+"\n\n*anime* : "+res.anime;
        const media = await MessageMedia.fromUrl(img);
        console.log('log : Berhasil Mengirim Quotes Anime');
        chat.sendMessage(media, {caption: caption});
    }
    //randomanime
    if(isiPesan.includes( trigger + "randomanime")){
        message.reply(pesanTunggu);
        const chat = await message.getChat();
        const res = await artRandomSFWMenu();
        let caption;
        if(res.mywaifu == true){
            caption = "*Character* : "+res.character+"\n\n*Copyright* : "+res.from+"\n\n*Tags* : "+res.tag+"\n\nEULA WANGI WANGI 😍😙";
        }else{
            caption = "*Character* : "+res.character+"\n\n*Copyright* : "+res.from+"\n\n*Tags* : "+res.tag;
        }
        console.log("log : Berhasil Mengirim Perbandaran : " + res.link);
        const media = await MessageMedia.fromUrl(res.link);
        chat.sendMessage(media, {caption: caption});
    }
    //genshin
    if(isiPesan.includes( trigger + "randomgenshin")){
        message.reply(pesanTunggu);
        const chat = await message.getChat();
        const res = await artGenshinSFWMenu();
        let caption;
        if(res.mywaifu == true){
            caption = "*Character* : "+res.character+"\n\n*Copyright* : "+res.from+"\n\n*Tags* : "+res.tag+"\n\nEULA WANGI WANGI 😍😙";
        }else{
            caption = "*Character* : "+res.character+"\n\n*Copyright* : "+res.from+"\n\n*Tags* : "+res.tag;
        }
        console.log("log : Berhasil Mengirim Perbandaran : " + res.link);
        const media = await MessageMedia.fromUrl(res.link);
        chat.sendMessage(media, {caption: caption});
    }
    //randomnsfw
    if(isiPesan.includes( trigger + "randomnsfw")){
        message.reply(pesanTunggu);
        const chat = await message.getChat();
        const res = await artRandomNSFWMenu();
        let caption;
        if(res.mywaifu == true){
            caption = "*Character* : "+res.character+"\n\n*Copyright* : "+res.from+"\n\n*Tags* : "+res.tag+"\n\nEULA WANGI WANGI 😍😙";
        }else{
            caption = "*Character* : "+res.character+"\n\n*Copyright* : "+res.from+"\n\n*Tags* : "+res.tag;
        }
        console.log("log : Berhasil Mengirim Perbandaran : " + res.link);
        const media = await MessageMedia.fromUrl(res.link);
        chat.sendMessage(media, {caption: caption});
    }
    //genshinnsfw
    if(isiPesan.includes( trigger + "genshinnsfw")){
        message.reply(pesanTunggu);
        const chat = await message.getChat();
        const res = await artGenshinNSFWMenu();
        let caption;
        if(res.mywaifu == true){
            caption = "*Character* : "+res.character+"\n\n*Copyright* : "+res.from+"\n\n*Tags* : "+res.tag+"\n\nEULA WANGI WANGI 😍😙";
        }else{
            caption = "*Character* : "+res.character+"\n\n*Copyright* : "+res.from+"\n\n*Tags* : "+res.tag;
        }
        console.log("log : Berhasil Mengirim Perbandaran : " + res.link);
        const media = await MessageMedia.fromUrl(res.link);
        chat.sendMessage(media, {caption: caption});
    }
    //Add Waifu
    if(isiPesan.includes(trigger + "addwaifu")){
        const cmd = message.body.split('/');
        if(cmd.length < 2){
            console.log("log : Gagal Menyimpan Waifu");
            message.reply("*"+salahFormat+"*, contoh: *.addwaifu/eula*");
        }else{
            if(message.hasMedia){
                const media = await message.downloadMedia();
                const waifuName = cmd[1];
                const retfil = await addWaifu(media,waifuName);
                console.log('log : Berhasil Menyimpan Waifu Baru, ' + retfil);
                message.reply('Berhasil Menyimpan Waifu, '+ retfil)
            }else{
                message.reply('Gambarnya Mana Bang?');
            }
        }
    }
    //Waifu
    // if(isiPesan.includes(trigger + "waifu")){
    //     const chat = await message.getChat();
    //     const file = await sendWaifu();
    //     const caption = "Nih Waifunya";
    //     console.log(file)
    //     const media = MessageMedia.fromFilePath(file);
    //     chat.sendMessage(media, {caption: caption});
    //     console.log('log : Berhasil Mengirim Waifu, '+file);


    // }
    //
    if(isiPesan.includes("tes")){
        message.reply('CROT!')
    }
}