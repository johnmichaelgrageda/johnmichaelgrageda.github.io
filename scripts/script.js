/* CLAUDEMAR */
/* Activate the pop-up*/
let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
    setTime
    out(closePopup, 10000);
}
/* Form Validation */
/* Variables */  
const form  = document.getElementById('form');
const field = document.querySelectorAll('.required');
const span  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
/* Function that turns red the border of the input field */
function setError(index){
    field[index].style.border = "3px solid #e63636";
    span[index].style.display = 'block';
}
function removeError(index){
    field[index].style.border = '';
    span[index].style.display = 'none';
}

/* Function that check the length of the name, if the length of the name is less then 4 characters 
it will activate the function setError that will display a red border in the field. */
function nameValidate(){
    if(field[0].value.length <= 4){
        setError(0);
    }
    else
    {
        removeError(0);
    }
}
/* This function use Regex to validate the Email */
function emailValidate(){
    if(!emailRegex.test(field[1].value)){
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

/* This Function validate the radiobox and not allow the user to select 2 options */
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
/* This Function validate the radiobox and not allow the user to select 2 options */

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
        
    }else {
        return false;
    }
}
