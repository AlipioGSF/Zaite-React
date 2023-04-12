const text1 = [{
    conteudo:
    'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sim nibh id elit.bibendum auctor, nisi elit consequet ipsum, nec sagittis sim nibh id elit.bibendum auctor, nisi elit consequet ipsum, nec sagittis sim nibh id elit.'
}]

 function renderText(){
    for(let txt of text1){
        const h2 = document.createElement('h2');
        h2.innerText = txt.conteudo;
        document.getElementById("sobre").appendChild(h2);
    }
}

renderText();