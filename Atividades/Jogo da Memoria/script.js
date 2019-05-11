const cartas = document.querySelectorAll('.carta')
function embaralhar(){
cartas.forEach(carta => {
    let numeroAleatorio = Math.floor(Math.random()*12);
    carta.style.order = numeroAleatorio

})
}
embaralhar();

cartas.forEach(carta => {
    carta.addEventListener('click', virarCarta)
})

let primeiraCarta = null
let segundaCarta = null

function virarCarta() {
    if (primeiraCarta && segundaCarta) {
        return
    } else {
        this.classList.add('flip')
    }
    if (primeiraCarta === null) {
        primeiraCarta = this
        console.log('1carta', primeiraCarta)
    } else {
        if (segundaCarta != null) {
            return
        }
        if (this === primeiraCarta) {
            return
        } else {
            
            segundaCarta = this
            console.log('2carta', segundaCarta)
            if (segundaCarta.dataset.framework === primeiraCarta.dataset.framework) {
                primeiraCarta = null
                segundaCarta = null
                return

            } else {
                setTimeout(() => {
                    primeiraCarta.classList.remove('flip')
                    segundaCarta.classList.remove('flip')
                    primeiraCarta = null
                    segundaCarta = null
                }, 1000)
                    
                }
            
            }
        }
}   
cartas.forEach(elemento => {
   if (cartas.classList.contains('flip'))
    return alert('isaisa')
})
    