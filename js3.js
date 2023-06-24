let inp = document.getElementById('inp')
let text = document.getElementById('text')
let but = document.getElementById('but')
let out = document.getElementById('out')
but.onclick = f1
const i = []
function f1() {
    let n = text.value
    let rez = n.replaceAll(inp.value, 'Пирог С Грибами')
    let mic = rez.indexOf('Пирог С Грибами')
    mic = 0
    while (mic != -1) {
        mic = rez.indexOf('Пирог С Грибами', mic + 1)
        console.log(mic)
        i.push(mic)
    }
    out.innerHTML = rez + '<br>' + i.length + '_______'+'Замен'
}
