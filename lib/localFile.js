const fs = require ('fs');
const randomFile = require('select-random-file');
let d = new Date();
let waktuSekarang = d.getDay() + "" + d.getMonth() + "" + d.getFullYear()+ "_" + d.getHours() + "" + d.getMinutes() + "" + d.getSeconds();

const addWaifu = async(media, waifuName) =>{
    const imageData = media.data;
    const files = "./media/waifu/"+waifuName+"_"+waktuSekarang+".jpg"
    const buffer = Buffer.from(imageData, "base64");
    fs.writeFile(files, buffer, err => {
        if (err) {
          console.error(err);
        }
         //file written successfully
      });
      return(waifuName+"_"+waktuSekarang+".jpg");
}

const sendWaifu = async() =>{
    const dir = "./media/waifu/";
    let ret
    randomFile(dir, (err, file) => {
        ret = file;
        console.log(err)
        return("pangsit");
      })


}
module.exports = {addWaifu, sendWaifu}