const exp=require('express')
const bodyparser=require('body-parser')
const sequelize=require('./models/exp')
const cro=require('cors') 
const controller=require('./controller/expense')
const app=exp()
app.use(bodyparser.json({extended :false}))
app.use(cro()) 

app.get('/expense/get',controller.getUser)

app.post('/expense/post',controller.postUser)

app.post('/delete/:deleteid',controller.deleteItem)

app.post('/edit/:editid',controller.editItem)

app.get('/totalAmount',controller.totalAmount)

sequelize.sync({force:false}).then((e)=> app.listen(3000)).catch(e=>console.log(e))
     