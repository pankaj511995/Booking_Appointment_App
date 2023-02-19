const User=require('../models/exp')

exports.postUser=(req,res)=>{
    try{
        const p=req.body;
        if(p.amount===''|| p.comment===''){
            return res.status(404).send(new ErrorEvent('error'))
            }
        User.create({amount:p.amount,comment:p.comment, catagory:p.catagory})
    }catch(e){ console.log('error while creating user details'.e) }
    }
exports.getUser=(req,res)=>{
        try{
        User.findAll().then(e=>res.send(JSON.stringify(e))).catch(e=>console.log(e))
        }catch(e){   console.log('error while sending user details'.Json.stringify(e))  }
        }
exports.deleteItem=(req,res)=>{
    try{
        if(req.params.deleteid){
            User.destroy({where:{id:req.params.deleteid}})      
        }
     }catch(e){   console.log('error while editing user details'.Json.stringify(e))  }
    }

exports.editItem=(req,res)=>{
    try{
        if(req.params.editid){
             User.findAll({where:{id:req.params.editid}}).then(e=>{
                    User.destroy({where:{id:req.params.editid}}).then(()=>res.send(e))
            })
        }
    }catch(e){   console.log('error while editing user details'.Json.stringify(e))  }
    }

exports.totalAmount=(req,res)=>{
    try{
    User.sum('amount').then(e=>res.send(JSON.stringify(e)))
    }catch(e){  console.log('total amount router called by html',e)   }
    }

