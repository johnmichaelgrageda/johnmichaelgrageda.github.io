/* CLAUDEMAR */
let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
    setTime
    out(closePopup, 10000);
}
const form  = document.getElementById('form');
const field = document.querySelectorAll('.required');
const span  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index){
    field[index].style.border = "3px solid #e63636";
    span[index].style.display = 'block';
}
function removeError(index){
    field[index].style.border = '';
    span[index].style.display = 'none';
}


function nameValidate(){
    if(field[0].value.length < 5){
        setError(0);
    }
    else
    {
        removeError(0);
    }
}
function emailValidate(){
    if(!emailRegex.test(field[1].value)){
        setError(1);
    }
    else
    {
        removeError(1);
    }
}
function validateRadio(){
    var validate = false;
    var y = document.myform.payment;

    for (var i=0; i<y.length; i++){
        if(y[i].checked){
            validate = true;
            break;
        }
    }
    if (validate){
        
    }else {
        
        return false;
    }
}

function valiCheck(){
    var validate = false;
    var y = document.myform.yesno;

    for (var i=0; i<y.length; i++){
        if(y[i].checked){
            validate = true;
            break;
        }
    }
    if (validate){
        alert("succesful");
    }else {
        alert('Select the payment method')
        return false;
    }
}
const formm = document.getElementById('myForm')
formm.addEventListener('submit', e => {
    e.preventDefault()
    
})