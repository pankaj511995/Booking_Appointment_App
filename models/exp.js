const Sequelize=require('sequelize')
const sequelize=require('../util/sequel')
module.exports= sequelize.define('User',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:{
       type:Sequelize.DOUBLE,
       defaultValue:0
       
    },
    comment:{
       type: Sequelize.STRING, 
       defaultValue:" "
    },
    catagory :Sequelize.STRING
})
