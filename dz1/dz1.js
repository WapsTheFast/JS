var btn1 = document.querySelector('#id1')

var btn2= document.querySelector('#id2')

var httpsss=['https://drive.google.com/drive/u/0/folders/1FUniO9OGcwpHzXeoR6H3wwtBVNfAXvLN',
            'http://mgke.minsk.edu.by',
            'https://rutracker.net/forum/index.php',
            'https://www.onliner.by',
            'https://www.youtube.com/watch?v=5qap5aO4i9A'

]

function arandra(n,x){
    return Math.floor(Math.random()*(x-n)+n)
}

btn1.addEventListener('click',function(){
    window.location.href = httpsss[arandra(0,3)]
})

btn2.addEventListener('click', function(){ //это авторская задумка - менять цвет на тот который напишут)))
    document.body.style.backgroundColor = prompt('Ну введите сюда цвет на который хотите поменять))))')
})
