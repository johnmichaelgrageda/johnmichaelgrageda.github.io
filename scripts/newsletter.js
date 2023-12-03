// Newsletter- Federico
const newsletter= document.querySelector('.newsletter-modal');
const newsForm= document.querySelector('.news-form');
const newsClose= document.getElementById('close-x');
const firstShow= document.querySelector('.first-show');
const subsMessage= document.querySelector('.subscription-messsage');

const newsForm2= document.querySelector('.news-form-2');
const firstShow2= document.querySelector('.first-show-2');
const subsMessage2= document.querySelector('.subscription-messsage-2');

window.addEventListener('load',() => {
    setTimeout(() => {
       if(newsletter) {
        newsletter.style.display= 'block';
       }
    }, 3000); 
});

if (newsletter) {
    newsletter.addEventListener('click', (e) =>{
        if (newsletter && e.target == newsletter){
            newsletter.style.display= 'none';
        }
    });
}

newsForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    firstShow.style.display= 'none';
    subsMessage.style.display='block';
});

if  (newsClose) {
    newsClose.addEventListener('click', (e)=>{
        e.preventDefault();
        newsletter.style.display= 'none';
    });
}

if (newsForm2) {
    newsForm2.addEventListener('submit', (e)=>{
        e.preventDefault();
        firstShow2.style.display= 'none';
        subsMessage2.style.display='block';
    });
}