const localNoticias = document.getElementById('localNoticias');

const noticias = [
    {
        imagem: '../img/noticia.jpg',
        conteudo: 'Aeneann sollictudin, lorem quis bibendum auctor, nisi elit consequat  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit',
        data: '20/03/23',
    }, 
    {
        imagem: '../img/noticia.jpg',
        conteudo: 'Aeneann sollictudin, lorem quis bibendum auctor, nisi elit consequat  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit',
        data: '22/03/23',
    }, 
    {
        imagem: '../img/noticia.jpg',
        conteudo: 'Aeneann sollictudin, lorem quis bibendum auctor, nisi elit consequat  ipsum, nec sagittis sem nibh id elit. Duis sed odio sit',
        data: '25/03/23',
    }, 
]

function renderNoticias(){
    for(let item of noticias){
        const noticia = document.createElement('div');
        noticia.classList.add('noticia');
        const img = document.createElement('img');
        img.setAttribute("src", item.imagem);
        const data = document.createElement('h3');
        data.innerText = item.data;
        const p = document.createElement('p');
        p.innerText = item.conteudo;
        const a = document.createElement('a');
        a.innerText = 'saiba mais';
        noticia.appendChild(img);
        noticia.appendChild(data);
        noticia.appendChild(p);
        noticia.appendChild(a);
        localNoticias.append(noticia);
    }
}

renderNoticias();