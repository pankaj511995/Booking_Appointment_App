const Sequelize=require('sequelize');
const sequelize=new Sequelize('expense','root','7501731287',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;