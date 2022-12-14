const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia, ChatTypes } = require('whatsapp-web.js');
const axios = require ('axios');
const fs = require('fs');
const eula = require('./eula.js');

const client = new Client({
    puppeteer: {
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        
    },
    authStrategy: new LocalAuth({ clientId: "EULAWANGI" }),
    
});

client.on('qr', qr => {
    console.log('Scan QR Code');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('EulaBOT siap Dipakai!');
});

client.initialize();


client.on('message', async message => {
    eula(client, message);
});




//LIB
//https://github.com/pedroslopez/whatsapp-web.js/blob/main/example.js

//API
//https://apimu.my.id/docs
//https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA
//https://farizdotid.github.io/DAFTAR-API-LOKAL-INDONESIA/#/