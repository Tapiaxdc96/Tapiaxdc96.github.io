var input = document.querySelector("div.formatoBusqueda input[name='cajaBusqueda']");


//animacion del cuadro de navegacion

let navegador = document.querySelector('.navegador');

document.querySelector('#menu-btn').onclick = () =>{

	navegador.classList.toggle('active');

}

// Animacion del cuadro de busqueda 

let formatoBusqueda = document.querySelector('.formatoBusqueda');

document.querySelector('#search-btn').onclick = () =>{
	
	formatoBusqueda.classList.toggle('active');
	
}

// cerrar menus cuando el usuario haga scroll por la pagina
window.onscroll = () =>{
    navegador.classList.remove('active');
    formatoBusqueda.classList.remove('active');
    input.value = '';
    
}

// Cerrar los menus cuando el usuario da click afuera de los cuadros
// window.addEventListener('mouseup',function(event){
//        if(event.target != formatoBusqueda && event.target.parentNode != formatoBusqueda){
//            navegador.classList.remove('active');
//   		formatoBusqueda.classList.remove('active');
//    		input.value = '';
//        }
//  });  