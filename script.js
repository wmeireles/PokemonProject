var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) {

    //Bloqueia o refresh da pagina
    e.preventDefault()
    //URL da pesquina
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";
    //valor do input name
    let nome = document.getElementById("name")

    //concatenar a url com o inputName
    urlForm = urlForm + this.name.value

    // Tranformar o valor em minusculo
    urlForm = urlForm.toLocaleLowerCase()

    //ID Content
    let resposta = document.getElementById('content')

    //ID IMGPokemon
    let imagem = document.getElementById('imgPokemon')

    // HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data) {
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html


            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })

        .catch(function (err) {
            if (err == 'SyntaxError: Unexpected token N in JSON at position 0') {
                html = 'Pokémon não encontrado! 😞'
            } else {
                html = err

                resposta.innerHTML = html
            }

        })


});

function maiuscula(val) {
    return val[0].toUpperCase() + val.substr(1)
}