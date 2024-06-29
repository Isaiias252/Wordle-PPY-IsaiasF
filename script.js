let diccionario = ['APPLE', 'ANGEL', 'MOUSE', 'HOUSE', 'PLATE', 'PLACE']
let random = Math.random()*diccionario.length
random = Math.floor(random)

let palablaSecreta = diccionario[random]
let oportunidades = 6

let button = document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")

button.addEventListener("click",intentar)

function intentar(){
    let intento = input.value.toUpperCase()
    if (intento == palablaSecreta){
        gameOver('Ganaste')
    }
    let row = document.createElement('div')
    row.className = 'row'
    for (let i in palablaSecreta){
        let letra = document.createElement('span')
        letra.className = 'letter'
        letra.innerHTML = intento[i]
        if (palablaSecreta[i] === intento[i]){
            letra.style.backgroundColor = 'green'
        }else if (palablaSecreta.includes(intento[i])){
            letra.style.backgroundColor = 'yellow'
        }else{
            letra.style.backgroundColor = 'gray'
        }
        row.appendChild(letra)
    }
    grid.appendChild(row)
    oportunidades--
    if (oportunidades == 0){
        gameOver('Perdiste')
    }
}

function gameOver(mensaje){
    button.disabled = true
    input.disabled = true
    let contenedor = document.getElementById("guesses")
    contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
}



