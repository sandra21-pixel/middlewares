const fs=require('fs')
const path = require('path')
const userParse = JSON.parse(fs.readFileSync(path.join(__dirname,'..','database','users.json'),'utf-8'))

function permiso(req,res,next){

    const user = userParse.find(e=> e.name.toLowerCase() === req.query.user.toLowerCase())
    
    if(user===undefined){
        res.redirect('error')
        
    }else if(user && user.cargo !== 'admin'){
        res.send("Disculpe no posee acceso como administrador")
    }else{
        next()
    }
    
    
}
module.exports=permiso