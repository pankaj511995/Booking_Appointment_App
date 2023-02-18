const Sequelize=require('sequelize');
const sequelize=new Sequelize('appointment','root','7501731287',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;