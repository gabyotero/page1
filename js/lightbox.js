const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const menu1 = document.querySelector('.menu');

// console.log(imagenes);
// console.log(imagenesLight);
// console.log(contenedorLight);

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
})
contenedorLight.addEventListener('click', (e)=>{
    if(e.target != imagenesLight){ //si yo le doy click a cualquier cosa menos a la imagen, se ejecuta el toggle que va a cerrar
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        menu1.style.opacity='1';

    }
})

const aparecerImagen =(imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    menu1.style.opacity='0';
}