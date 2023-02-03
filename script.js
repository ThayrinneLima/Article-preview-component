let botao = document.querySelector('.botao')
let social = document.querySelector('.social')
console.log(botao)
console.log(social)


function share() {
    social.classList.toggle("social-active")
    botao.classList.toggle('botao-active')
}