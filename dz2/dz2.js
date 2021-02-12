let temperatures={
    Belarus:-28,
    Poland:-15,
    Lithuania:-20,
    Latvia:-25
}
let s = 0
let i = 0 
for (key in temperatures){
    s+=(temperatures[key])
    i++
}
console.log('Average temperature:',s/i)

function maxt(temperatures){
    var max = Math.log(0)
    for(key in temperatures){
        if (temperatures[key]>max){
            max=temperatures[key]
        }
    }
    console.log('maximum temperature:',max)
}
maxt(temperatures)