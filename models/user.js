const Sequelize=require('sequelize')
const sequelize=require('../util/sequel')
module.exports= sequelize.define('User',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    email: {
        type:Sequelize.STRING, 
        unique:true
    },
    phone :{
       type: Sequelize.INTEGER,
       unique:true
    }
})
