const axios = require ('axios');

const bacotMenu = async() =>{
    let res = await axios.get('https://apimu.my.id/randomtext/bacot',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data.hasil;
        return(outt);
    }
}

const kataBijakMenu = async() =>{
    let res = await axios.get('https://apimu.my.id/randomtext/katabijak',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data.hasil;
        return(outt);
    }
}


const kataIlhamMenu = async() =>{
    let res = await axios.get('https://apimu.my.id/randomtext/katailham',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data.hasil;
        return(outt);
    }
}

const pantunPakBoyMenu = async() =>{
    let res = await axios.get('https://apimu.my.id/randomtext/pantunpakboy',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data.hasil;
        return(outt);
    }
}

const sindiranMenu = async() =>{
    let res = await axios.get('https://apimu.my.id/randomtext/sindiran',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data.hasil;
        return(outt);
    }
}

const quotesAnimeMenu = async() =>{
    let res = await axios.get('https://apimu.my.id/randomtext/quotesanime',
            {
                headers: {
                    'Accept-Encoding': 'application/json',
                }
            });
    if(res.status == 200){
        let outt = res.data.result;
        return(outt);
    }
}

module.exports = {bacotMenu, kataBijakMenu, kataIlhamMenu, pantunPakBoyMenu, sindiranMenu, quotesAnimeMenu};