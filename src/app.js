class KenzieNews{
    static requisicao(){
        fetch('https://kenzie-news-api.herokuapp.com/api/news')
        .then(response => response.json()).then((data) => {
            data.forEach(elem => {  
                if(elem.id == 2){
                    this.templateGrande(elem)           
                }else{
                    this.templateNormal(elem)
                }              
                
            })    
        })

    }
    static templateNormal(data){
        const ul = document.querySelector('#container-news')
        const li = document.createElement('li')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const section = document.createElement('section')
        const categoria = document.createElement('h4')
        const titulo = document.createElement('h2')
        const resumo = document.createElement('h3')
        const fonte = document.createElement('h5')
        
        li.classList.add('normal')
        img.src   = data.imagem
        categoria.innerText = data.categoria
        titulo.innerText = data.titulo
        resumo.innerText = data.resumo
        fonte.innerText = `Fonte: ${data.fonte}`

        section.append(categoria, titulo, resumo, fonte)
        figure.appendChild(img)
        li.append(figure,section)
        ul.appendChild(li)
    }
    static templateGrande(data){
        const ul = document.querySelector('#principal')
        const li = document.createElement('li')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const section = document.createElement('section')
        const categoria = document.createElement('h4')
        const titulo = document.createElement('h2')
        const resumo = document.createElement('h3')
        const fonte = document.createElement('h5')
        
        li.id = 'grande'
        img.src   = data.imagem
        categoria.innerText = data.categoria
        titulo.innerText = data.titulo
        resumo.innerText = data.resumo
        fonte.innerText = `Fonte: ${data.fonte}`

        section.append(categoria, titulo, resumo, fonte)
        figure.appendChild(img)
        li.append(figure,section)
        ul.appendChild(li)

    }
}

KenzieNews.requisicao()