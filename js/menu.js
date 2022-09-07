const menu = document.querySelector('.menu');
const menu_nav = document.querySelector('.menu-navegacion');

// console.log(menu);
// console.log(menu_nav);

menu.addEventListener('click', ()=>{
    menu_nav.classList.toggle("spread") //cada vez que toques el menu hamburguesa vas a quitarle y ponerle la clase, dependiendo de si la tiene o no
})


window.addEventListener('click', e=>{
    // console.log(e.target); ese e.target sirve para saber a qué cosas le damos click
    if(menu_nav.classList.contains('spread')
    && e.target != menu_nav && e.target != menu){  //Este if dice si está abierto el menu y  que si le damos clic a algo dif al menu y  dif al icono de  hamburguesa que sólo entonces lo cerrará
        //si quitamos lo ultimo del if nunca se mostraría porque estaría abriendo y cerrando instantaneamente
        menu_nav.classList.toggle("spread");

    }
})