const request=require('request');
const forecast=(lattitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/764c6be269f31921c4653e059e4f1d70/'+lattitude  +","+longitude
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect ,check your connection')
        }else if(response.body.error){
            callback('unable to find the location you provided, search again')
        }else{
            callback(undefined,'The current temperature is '+response.body.currently.temperature+' celcius and there is '+response.body.currently.precipProbability+'% chance of rain')
        }


    })


}
module.exports=forecast;