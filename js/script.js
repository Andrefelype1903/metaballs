
const esfera1 = document.querySelector('.meta1');
const esfera2 = document.querySelector('.meta2');
const esfera3 = document.querySelector('.meta3');
const esfera4 = document.querySelector('.meta4');
const tela = document.querySelector('body');

var n = 0

tela.addEventListener('click', () => {

    

    if(n === 0) {

        esfera1.classList.replace('meta1','meta-red')
        esfera2.classList.replace('meta2','meta-red')
        esfera3.classList.replace('meta3','meta-red')
        esfera4.classList.replace('meta4','meta-red')

        n++

    } else if(n === 1) {

        esfera1.classList.replace('meta-red','meta-purple')
        esfera2.classList.replace('meta-red','meta-purple')
        esfera3.classList.replace('meta-red','meta-purple')
        esfera4.classList.replace('meta-red','meta-purple')

        n++

    } else if(n === 2) {

        esfera1.classList.replace('meta-purple','meta-green')
        esfera2.classList.replace('meta-purple','meta-green')
        esfera3.classList.replace('meta-purple','meta-green')
        esfera4.classList.replace('meta-purple','meta-green')

        n++

    } else if(n === 3) {

        esfera1.classList.replace('meta-green','meta-yellow')
        esfera2.classList.replace('meta-green','meta-yellow')
        esfera3.classList.replace('meta-green','meta-yellow')
        esfera4.classList.replace('meta-green','meta-yellow')

        n = 4

    } else if(n === 4) {

        esfera1.classList.replace('meta-yellow','meta1')
        esfera2.classList.replace('meta-yellow','meta2')
        esfera3.classList.replace('meta-yellow','meta3')
        esfera4.classList.replace('meta-yellow','meta4')

        n = 0

    }
    
})
