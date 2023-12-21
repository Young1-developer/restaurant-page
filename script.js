const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const ul = document.querySelector('ul');

openMenu.addEventListener('click',(()=>{
    if(openMenu){
        ul.style.display ='block';
        ul.style.top = '100px';
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
    }   
}))

closeMenu.addEventListener('click',(()=>{
    if(closeMenu){
        ul.style.display ='none';
        ul.style.top = '-200px';
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
    }
}))