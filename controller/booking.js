const User=require('../models/user')

exports.postUser=(req,res)=>{
    try{
    const p=req.body;
    if(p.email===''||p.phone==="")
    {
        res.send(new Error('it alerady exist'))
    }
    User.create({name:p.name,email:p.email, phone:p.phone})
    .then((e)=>res.send(e))
    }catch(e){ console.log('error while creating user details'.Json.stringify(e)) }
}
exports.getUser=(req,res)=>{
try{
    User.findAll().then(e=>res.send(JSON.stringify(e))).catch(e=>console.log(e))
}catch(e){   console.log('error while sending user details'.Json.stringify(e))  }
}
exports.deleteItem=(req,res)=>User.destroy({where:{id:req.params.deleteid}})

exports.editItem=(req,res)=>{
    try{
User.findAll({where:{id:req.params.editid}}).then(e=>{
    const r=e;
    User.destroy({where:{id:req.params.editid}}).then(()=>{
        res.send(r)
    })
})
}catch(e){   console.log('error while editing user details'.Json.stringify(e))  }
}