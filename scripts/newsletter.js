// Newsletter- Federico
const newsletter= document.querySelector('.newsletter-modal');
const newsForm= document.getElementById('news-form');

window.addEventListener('load',() => {
    setTimeout(() => {
        newsletter.style.display= 'block';
    }, 3000); 
});

newsletter.addEventListener('click', (e) =>{
    if(e.target == newsletter){
        newsletter.style.display= 'none';
    }
});

newsForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    newsletter.style.display= 'none';
});
