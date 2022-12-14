const kapanMenu = () =>{
    const arrayKapan = ['Sekarang',"Hari Ini","Besok","Tidak Akan Pernah","2 Hari Lagi","Sebulan Lagi","Seminggu Lagi","Setahun Lagi","Kemarin","Seminggu Yang Lalu"];
    let random = Math.floor(Math.random() * arrayKapan.length);
    return( arrayKapan[random]);
}

const errorMenu = () =>{
    const arrayKapan = ["log : Earth Not Found","log : Directory Not Found","log : Code Error","log : Failed to Access cbt-smandu.solusiterbaik.my.id","log : Success Drop Database cbt-smandu.solusiterbaik.my.id","log : Command not Found","Failed Parsing Data","Failed GET Genshin-Hentai-Images","Failed GET Genshin-Hentai-Video","Failed GET Random-Hentai-Images","Failed GET-Pixiv-Search"];
    let random = Math.floor(Math.random() * arrayKapan.length);
    return( arrayKapan[random]);
}

const persenMenu = () =>{
    let random = Math.floor(Math.random() * 100)
    return(random)
}

const apakahMenu = () =>{
    const arrayApakah = ['Iya','Pasti','Tidak','Tidak Akan','Tidak Mungkin'];
    let random = Math.floor(Math.random() * arrayApakah.length);
    return(arrayApakah[random])
}

const halahMenu = (kata) =>{
    let halah = kata.replaceAll("i","a");
    halah = halah.replaceAll("u","a");
    halah = halah.replaceAll("e","a");
    halah = halah.replaceAll("o","a");
    return(halah);
}

const hilihMenu = (kata) =>{
    let hilih = kata.replaceAll("a","i");
    hilih = hilih.replaceAll("u","i");
    hilih = hilih.replaceAll("e","i");
    hilih = hilih.replaceAll("o","i");
    return(hilih);
}

const huluhMenu = (kata) =>{
    let huluh = kata.replaceAll("a","u");
    huluh = huluh.replaceAll("i","u");
    huluh = huluh.replaceAll("e","u");
    huluh = huluh.replaceAll("o","u");
    return(huluh);
}

const helehMenu = (kata) =>{
    let heleh = kata.replaceAll("a","e");
    heleh = heleh.replaceAll("i","e");
    heleh = heleh.replaceAll("u","e");
    heleh = heleh.replaceAll("o","e");
    return(heleh);
}

const holohMenu = (kata) =>{
    let holoh = kata.replaceAll("a","o");
    holoh = holoh.replaceAll("i","o");
    holoh = holoh.replaceAll("u","o");
    holoh = holoh.replaceAll("e","o");
    return(holoh);
}

module.exports = { kapanMenu, persenMenu,apakahMenu,halahMenu,hilihMenu,huluhMenu,helehMenu,holohMenu,errorMenu };
