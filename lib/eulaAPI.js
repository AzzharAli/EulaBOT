const axios = require ('axios');

//Art Random SFW
const artRandomSFWMenu = async() =>{
    let res = await axios.get('https://api.eula.my.id/v1/danbooru_sfw.php',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data;
        return(outt);
    }
}

//Art Genshin SFW
const artGenshinSFWMenu = async() =>{
    let res = await axios.get('https://api.eula.my.id/v1/danbooru_sfw.php?tags=genshin_impact',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data;
        return(outt);
    }
}

//Art Random NSFW
const artRandomNSFWMenu = async() =>{
    let res = await axios.get('https://api.eula.my.id/v1/danbooru_nsfw.php',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data;
        return(outt);
    }
}

//ART Genshin NSFW
const artGenshinNSFWMenu = async() =>{
    let res = await axios.get('https://api.eula.my.id/v1/danbooru_nsfw.php?tags=genshin_impact',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data;
        return(outt);
    }
}

module.exports = {artRandomSFWMenu,artGenshinSFWMenu,artRandomNSFWMenu,artGenshinNSFWMenu};