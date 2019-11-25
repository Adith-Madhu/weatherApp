const path=require('path')
const express=require('express');
const hbs=require('hbs')
const app=express();

const publicDirectory=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectory))
app.get('/',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Adith Madhu'
    })

})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Adith Madhu'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Adith Madhu'
    })
})
app.get('/weather',(req,res)=>{
    res.send({
        temperature:32.5,
        precipProbability:0.89
    })

})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        res.send({
            error:'Please enter a search term'
        })
    }
    res.send({
        products:[]
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'Page not found',
        name:'Adith Madhu'
    })
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})