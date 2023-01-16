function validate() {
    // Busca el elemento botón y añade el atributo "disabled" SOLO si el elemento "input" tiene un .value distinto de ''
    // 👇🏻 
     let input = document.querySelector('.input');
    let button = document.querySelector('button');
    console.log(input.value)
    if(input.value != '') { // != significa DISTINTO DE
        button.setAttribute('disabled',''); // esto NECESITA 2 valores si o si (atributo, valor)
        // OTRA MANERA de hacerlo es button.disabled = true; arriba es la manera más correcta, aunque cambiasemos el '' por 'true' seguiria funcionando.
    }

    // 👆🏻
}