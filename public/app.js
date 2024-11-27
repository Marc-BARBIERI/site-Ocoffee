

const btnMenu = document.querySelector('.logo__menu');
const menu = document.querySelector('.list__nav');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})


const allLinks = document.querySelectorAll('.item__nav');

allLinks.forEach(function(item){

    item.addEventListener('click', function(){
        menu.classList.toggle('active');
    })

})

const afficherBtn = document.querySelector('.btn__Afficher--plus');
let currentItem = 4;

afficherBtn.onclick = ()=>{
    let box = [...document.querySelectorAll('.card__cafe')];
    for(let i = currentItem; i < currentItem + 4; i++){
        box[i].style.display = 'inline-block';
    };
    currentItem += 4 ;
    if(currentItem >= box.length){
        afficherBtn.style.display = 'none';
    }
}