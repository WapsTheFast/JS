let btn1 = document.querySelector('#id1')
let btn2 = document.querySelector('#id2')
let btndo = document.querySelector('#do')
let text = document.querySelector('#task')
let list = document.querySelector('#list')
let time = document.querySelector('#time')
let ps = document.querySelector('#ps')
let locobj = {
    str: '',
    tt: ''
};
let lols = []
let est=[]
let n = 0
let del = []
let but = []
let lil = []
let lils = []
let timers = []
let times = []
let ttimes = []
let now = new Date()
let fullhour = []
let fullmin = []
let hordrob = []
let mindrob = []
let a =0
function load() {
    if (localStorage.getItem('lol')) {
        lols = JSON.parse(localStorage.getItem('lol'))
        for (let i in lols) {
            list.innerHTML += '<li id="lies"><span id="li"><button id="todo"><img src="ag800q13r2knpr5camh045e6fo.png" width = "15" height = "15"></button>' + lols[i].str + '</span><span id="timer"></span></li>'
            est[a]=lols[i].tt
            a++
        }
        for(let i=0;i<Object.keys(lols).length;i++){
            lils = document.querySelectorAll('#lies')
            lil = document.querySelectorAll('#li')
            but = document.querySelectorAll("#todo")
            deletebuuton(i)
            ttimer(i)
        }
    }
}
load()

function ttimer(i) {
    timers = document.querySelectorAll('#timer')
    if (times[i] == null) {
        times[i] = new Date(est[i])
        if (est[i] != '') {
            times[i] -= now
            let tt = setInterval(function () {
                times[i] -= 1000
                fullhour[i] = parseInt(times[i] / 3600000)
                hordrob[i] = times[i] / 3600000
                fullmin[i] = parseInt(times[i] / 60000)
                mindrob[i] = times[i] / 60000
                timers[i].innerHTML = ' | ' + fullhour[i] + ':' + (parseInt((hordrob[i] - fullhour[i]) * 60)) + ':' + (parseInt((mindrob[i] - fullmin[i]) * 60))
                if (times[i] <= 0) {
                    timers[i].innerHTML = ' | Время истекло ('
                    clearInterval(tt)
                    ps.innerHTML = 'У вас есть просроченное(-ые) дело(-а)!'
                }
            }, 1000)
        } else { timers[i].innerhtml = '' }
        time.value = ''
    }
}
btndo.addEventListener('click', function () {
    n += 1
    list.innerHTML += '<li id="lies"><span id ="li"><button id="todo"><img src="ag800q13r2knpr5camh045e6fo.png" width = "15" height = "15"></button>' + text.value + '</span><span id="timer"></span></li>'
    lols[Object.keys(lols).length] = { tt: time.value, str: text.value }
    for(let i in lols){

    est[a]=lols[i].tt
    a++
    }
    text.value = ''
    ps.innerHTML = 'Дело добавлено.'
    for (let i = 0; i < n; i++) {
        but = document.querySelectorAll("#todo")
        lil = document.querySelectorAll('#li')
        lils = document.querySelectorAll('#lies')
        deletebuuton(i)
        ttimer(i)
    }
})
function deletebuuton(i) {
    but[i].addEventListener('click', function () {
        lils[i].parentNode.removeChild(lils[i])
        lols.splice(i,1)
        ps.innerHTML = 'Дело удалено, но что бы оно удалилось полностью, надо нажать кнопку "сохранить"'
    })
}

btn2.addEventListener('click', function () {
    list.innerHTML = ''
    ps.innerHTML = 'Ура! Вы всё удалили!.'
    localStorage.clear()
})

btn1.addEventListener('click', function () {
    localStorage.setItem('lol', JSON.stringify(lols))
    ps.innerHTML = 'Все изменения сохранены)'
})