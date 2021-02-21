var btn1 = document.querySelector('#id1')

var btn2 = document.querySelector('#id2')

var btndo = document.querySelector('#do')

var text = document.querySelector('#task')

var list = document.querySelector('#list')

var time = document.querySelector('#time')

var ps = document.querySelector('#ps')

let n = 0
let del = []
let but = []
let lil = []
let timers = []
let times = []
let now = new Date()
let fullhour = []
let fullmin = []
let hordrob = []
let mindrob = []
let fullsec = []
let secdrob = []

if(localStorage){
    list.innerHTML=localStorage.getItem('list')
}

btndo.addEventListener('click', function () {
    n += 1
    list.innerHTML += '<li id="li"><button id="todo"><img src="ag800q13r2knpr5camh045e6fo.png" width = "15" height = "15"></button>' + text.value + '<span id="timer"></span></li>'
    text.value = ''
    ps.innerHTML = 'Дело добавлено.'
    but = document.querySelectorAll("#todo")
    lil = document.querySelectorAll('#li')
    timers = document.querySelectorAll('#timer')

    for (let i = 0; i < n; i++) {

        but[i].addEventListener('click', function () {
            lil[i].parentNode.removeChild(lil[i])
            ps.innerHTML = 'Дело удалено, но что бы оно удалилось полностью, надо нажать кнопку "сохранить"'
        })


        if (times[i] == null) {
            times[i] = new Date(time.value)
            if (time.value != '') {
                times[i] -= now
                let tt = setInterval(function () {
                    times[i] -= 1000
                    fullhour[i] = parseInt(times[i] / 3600000)
                    hordrob[i] = times[i] / 3600000
                    fullmin[i] = parseInt(times[i] / 60000)
                    mindrob[i] = times[i] / 60000
                    fullsec[i] = parseInt(times[i] / 1000)
                    secdrob[i] = times[i] / 1000
                    timers[i].innerHTML = ' | ' + fullhour[i] + ':' + (parseInt((hordrob[i] - fullhour[i]) * 60)) + ':' + (parseInt((mindrob[i] - fullmin[i]) * 60))
                    if (times[i] <= 0) {
                        timers[i].innerHTML = ' | Время истекло ('
                        clearInterval(tt)
                        ps.innerHTML = 'У вас есть просроченное(-ые) дело(-а)!'
                    }
                }, 1000);
            } else { timers[i].html = '' }
            time.value = ''
        }

    }
})



btn2.addEventListener('click', function () {
    list.innerHTML = ''
    ps.innerHTML = 'Ура! Вы всё удалили!.'
    localStorage.clear()
})
btn1.addEventListener('click', function () {
    for(i=0;i<n;i++){
    localStorage.setItem('list',lil[i].innerHTML)
    }
    ps.innerHTML = 'Все изменения сохранены)'
})