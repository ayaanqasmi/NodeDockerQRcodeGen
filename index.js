import inquirer from 'inquirer'
import fs from 'node:fs'
import qr from 'qr-image'
inquirer.prompt([{message:"enter url",name:"url"}]).then((ans)=>{
    var myurl=ans.url
    
    fs.writeFile("log.txt",myurl,()=>{})
    var img=qr.image(myurl)
    img.pipe(fs.createWriteStream(`img.png`))
    console.log("done")

}).catch((err)=>{
    if (err.isTtyError) {
        console.log("bad prompt")
      } else {
        console.log(err)
      }
})