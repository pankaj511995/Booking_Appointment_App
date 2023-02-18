const User=require('../models/user')

exports.postUser=(req,res)=>{
    const p=req.body;
    User.create({name:p.name,email:p.email, phone:p.phone})
    .then((e)=>res.send(e)).catch(e=>console.log(e))
}
exports.getUser=(req,res)=>User.findAll().then(e=>res.send(JSON.stringify(e))).catch(e=>console.log(e))

exports.deleteItem=(req,res)=>User.destroy({where:{id:req.params.deleteid}})

exports.editItem=(req,res)=>{
User.findAll({where:{id:req.params.editid}}).then(e=>{
    const r=e;
    User.destroy({where:{id:req.params.editid}}).then(()=>{
        res.send(r)
    })
})
}