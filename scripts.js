//let sonic = document.querySelector('.sonic');
let banner = document.querySelector('.banner img');
let imagens = [	
    'img/banner1.webp', 
    'img/banner2.png',
    'img/banner3.jpg',
    'img/banner4.jpg',
    'img/banner5.jpg'
];
let bannerAtivo = 1;

setTimeout(function(){
    sonic.style.transform = 'translateX(1000%)';
}, 2800);


setInterval(function(){
    console.log(bannerAtivo);
    banner.src = imagens[bannerAtivo];
    bannerAtivo++;

    if(bannerAtivo == imagens.length){
        bannerAtivo = 0;
    }
}, 1000);
