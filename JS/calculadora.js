let Boton = document.querySelector('#boton');

    Boton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        Boton.classList.toggle('active');
    });