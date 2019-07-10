let img = document.querySelector('.container'),
troca = document.querySelector('#img'),
insere = document.querySelector('#oculta'),
sale = document.querySelector('.sale h4'),
money = document.querySelector('.sale h2'),
tour = document.querySelector('.sale img'),
small = document.querySelector('.social'),
ocult = document.querySelector('header'),
contador = 4000;
tour.setAttribute('style', 'width: 150px')


troca.addEventListener('click', function(){
  insere.classList.toggle('ativa')
})
   
small.addEventListener('click', function(){
    ocult.classList.toggle('ativa-small')
})
     

function ativaUm(){
    img.setAttribute('style', `
    background-image: url('./img/image-1.jpg');
    animation-name: move;`
    )
    sale.innerText="Viagem para Cancún";
    money.innerHTML=`<b>R$</b>: 
    3,000.<small>00</small>`;
    tour.setAttribute('src', 'img/cancun.jpg')
    setTimeout('ativaDois()', contador)
}

function ativaDois(){
    img.setAttribute('style', `
    background-image: url('./img/image-2.jpg');
    animation-name: moveDois;`
    ) 
    sale.innerText="Viagem para o Caribe";
    money.innerHTML=`<b>R$</b>: 
    2,300.<small>00</small>`;
    tour.setAttribute('src', 'img/caribe.jpg')
    setTimeout('ativaTres()', contador)
}

function ativaTres(){
    img.setAttribute('style', `
    background-image: url('./img/image-3.jpg');
    animation-name: moveTres;`
    )
    sale.innerText="Viagem para Ilhéus";
    money.innerHTML=`<b>R$</b>: 
    1,500.<small>00</small>`;
    tour.setAttribute('src', 'img/ilheus.jpg')
    setTimeout('ativaUm()', contador)
}