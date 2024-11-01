'use strict';
const showModal = document.querySelectorAll('.showModal');
const hidden = document.querySelector('.hidden');
const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const closeBtn = document.querySelector('.closeBtn')

for(let i=0; i<showModal.length; i++)
    showModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

const CloseModalFun = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeBtn.addEventListener('click', CloseModalFun)

overlay.addEventListener('click', CloseModalFun)

document.addEventListener('keydown', function(acceptEvent){
    if(acceptEvent.key === 'Escape' && !modal.classList.contains('hidden') )
        CloseModalFun()
})