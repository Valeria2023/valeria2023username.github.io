//En JS me salen 2 errores que no entendi de que se trataban, me estuve guiando con varios videos pero no pude lograrlo//
const hamburguer = document.querySelector('.hamburguer');

const navMenu  = document.querySelector('.nav-menu');

hamburguer.addEventListener('click',()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))
