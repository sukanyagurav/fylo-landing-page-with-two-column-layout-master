const btn2 = document.getElementById('btn2');
const btn1 = document.getElementById('btn1');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const error=document.querySelector('.errorMsg')
const form=document.querySelector('.form-group')
function checkEmail(email){
    const regex=/^([a-zA-Z0-9\.-]+)@([a-zA-z0-9-]+)(\.[a-z]{2,18})(\.[a-z]{2,8})?$/
    if(!email.match(regex)){
        error.style.display='block'
        error.innerHTML ='Please check your email'
        form.classList.add('error');
    }
    else{
       
        setTimeout(()=>{
            form.classList.add('error');
            error.style.display='none'
            form.classList.remove('error');
        },1000)
    }
}
btn1.addEventListener('click',function(e){
    e.preventDefault()
    checkEmail(input1.value)
})
btn2.addEventListener('click',function(e){
    e.preventDefault()
    checkEmail(input2.value)
    console.log('btn2')
})