const request=require('request');
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/ '+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYWRpdGhtYWRodTEyMyIsImEiOiJjazMxbjhuZXIwM2RhM2JtbWR2OW9rNWRlIn0.SUtmhU4pAbvQjvalDvQ1Sg&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect to server,please check the connection')
        }else if(response.body.features.error){
            callback('unable to find the location')
        }else{
            callback(undefined,{
              longitude:response.body.features[0].center[0],
              latitude:response.body.features[0].center[1]
            })
    
    
    }
})
}
    module.exports=geocode;
