const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/764c6be269f31921c4653e059e4f1d70/'+latitude +","+longitude
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to the server,please check the network connection and try again')
        }else if(response.body.error){
            callback('unable to locate the given latitude and longitude')
        }else{
            callback(undefined,{
                temperture:response.body.currently.temperature,
                precipProbability:response.body.currently.precipProbability
            
            })
        }
    })}
    module.exports=forecast;