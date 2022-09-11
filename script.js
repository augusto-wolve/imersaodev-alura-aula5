var filmes = []

function adicionarFilme() {
    let colocarFilme = document.getElementById('filme').value

    if (colocarFilme.endsWith(('.jpg'))) {
        filmeFavorito(colocarFilme)
        filmes.push(colocarFilme)
    } else {
        console.error('Coloque uma imagem .jpg');
    }

    document.getElementById('filme').value = ''
}

function filmeFavorito(colocarFilme) {

    for (let index = 0; index < 1; index++) {

        let adicionarImagem = '<img src= ' + colocarFilme + '>'
        let listaFilmes = document.getElementById('listaFilmes')

        listaFilmes.innerHTML += adicionarImagem
    }
}


function removerFilme() {
   
   let listaFilmes = document.getElementById('listaFilmes')

   listaFilmes.innerHTML = filmes.pop()
   
   listaFilmes.innerHTML = ''

}










