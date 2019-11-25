const formData=document.querySelector('form');
const inputData=document.querySelector('input')
const msgOne=document.querySelector('#messageOne')

formData.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location=inputData.value
    msgOne.textContent=""
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            msgOne.textContent=data.error
        }
        msgOne.textContent=data.forecast
        

    })

})


})