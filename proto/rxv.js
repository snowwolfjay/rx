
const rxv = {
    load(name){
        const window = {}
        const module = {}
        const exports = {}
        fetch(name+'.js').then(res=>res.text()).text(v=>{
            eval(v)
            console.log(window)
            console.log(module)
            console.log(exports)
        })
    }
}

window.RXV = rxv;