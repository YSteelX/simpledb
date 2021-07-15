//TANIMLAR DOKANMA
const fs = require('fs')
const chalk = require('chalk')
const vry = require('veryveryveryimportantmodule')
//ana tanımlar
var readysteelx = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var writetojsonysteelx = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))


module.exports = {
    fetch:function(name){        
        const data = readysteelx('./data.json')
        vry.s()
        return data[name]? data[name] : null
    },
    set:function(name,id){
        try{
            readysteelx('./data.json')
        } catch {
            writetojsonysteelx('./data.json',{})
        }
        const data = readysteelx('./data.json')
        data[name] = id
        vry.s()
        writetojsonysteelx('./data.json',data)
    },
    ysteelx:function(){
        vry.s()
        console.log(chalk.red('YSteelX <3'))
    }
}


/*
--- Açıklama ---

- Bu Örnek Bir Database Modülüdür!
- fs Modülünü Öğrenerek Daha Da Geliştirebilirsiniz!
- Discord : YSteelX#0001
- Twitter : https://twitter.com/YSteelX1

*/