const btn2 = document.getElementById('btn2');
const btn1 = document.getElementById('btn1');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const error1=document.querySelector('.errorMsg1')
const error2=document.querySelector('.errorMsg2')
const form=document.querySelector('.form-group')
function checkEmail(email,error){
    const regex=/^([a-zA-Z0-9\.-]+)@([a-zA-z0-9-]+)(\.[a-z]{2,18})(\.[a-z]{2,8})?$/
    if(!email.value.match(regex) || email.value===''){
        error.style.display='block'
        email.style.borderColor='red'
        error.innerHTML ='Please check your email'
    } 
    setTimeout(()=>{
        error.style.display='none'
        email.style.borderColor='hsl(0, 0%, 75%)'
    },2000)
}
btn1.addEventListener('click',function(e){
    checkEmail(input1,error1)
})
btn2.addEventListener('click',function(e){
    checkEmail(input2,error2)
    console.log('btn2')
})
