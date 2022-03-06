(function () {
    const btnEliminar= document.querySelectorAll(".btnEliminar");

    btnEliminar.forEach(btn =>{
        btn.addEventListener('click', (e) =>{
            const confirmacion= confirm('¿Desea Eliminar el curso?');
            if(!confirmacion){
                e.preventDefault();
            }
        });
    });
    
})();