const express=require('express')
const path=require('path')
const hbs=require('hbs')
const geocode=require('./utilis/geocode')
const forecast=require('./utilis/forecast')

const app=express()
const publicDirectory=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

app.use(express.static(publicDirectory))
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)


app.get('/',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Adith Madhu'
    })

    
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
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
    if(!req.query.address){
        return res.send({
            error:'provide the address'
        })
    }
    geocode(req.query.address,(error,{longitude,lattitude})=>{
        if(error){
            res.send({error})
        }
        forecast(longitude,lattitude,(error,forecastData)=>{
            res.send({
                forecast:forecastData,
                address:req.query.address
            })
        })
    })
    
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'error please provide search term'
        })
    }
    res.send({
        products:[]
    })

})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 Page',
        name:'Adith Page',
        errorMessage:'Error Page'

    })
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})