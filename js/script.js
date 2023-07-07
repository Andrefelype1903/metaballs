
const esfera1 = document.querySelector('.meta1');
const esfera2 = document.querySelector('.meta2');
const esfera3 = document.querySelector('.meta3');
const esfera4 = document.querySelector('.meta4');
const tela = document.querySelector('body');

let n = 1

tela.addEventListener('click', () => {

    if(n === 1) {

        esfera1.classList.replace('meta1','metaall')
        esfera2.classList.replace('meta2','metaall')
        esfera3.classList.replace('meta3','metaall')
        esfera4.classList.replace('meta4','metaall')

        n = 0

    } else {

        esfera1.classList.replace('metaall','meta1')
        esfera2.classList.replace('metaall','meta2')
        esfera3.classList.replace('metaall','meta3')
        esfera4.classList.replace('metaall','meta4')

        n = 1
    }
})
