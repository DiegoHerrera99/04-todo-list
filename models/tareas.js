const Tarea = require('./tarea')

class Tareas {

    _listado = {}

    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado
    }

    constructor() {
        this._listado = {}
    }

    borrarTarea(id = '') {
        if(this._listado[id]){
            delete this._listado[id]
        }
    }

    cargarTareas(tareas = []){
        tareas.forEach(tarea => this._listado[tarea.id] = tarea)
    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

    listado(){
        console.log()
        this.listadoArr.forEach(({desc, completadoEn}, idx) => {
            console.log(`${String(idx + 1 + '.').green} ${desc} :: ${completadoEn === null ? 'Pendiente'.red : completadoEn.green }`)
        })
        console.log()
    }

    listadoCompletadas(completadas){
        console.log()
        let idx = 0
        this.listadoArr.forEach(({desc, completadoEn}) => {
            if(completadas ? completadoEn : !completadoEn){
                idx += 1
                console.log(`${String(idx + '.').green} ${desc} :: ${completadas ? completadoEn.green : 'Pendiente'.red}`)
            }
        })
        console.log()
    }

}

module.exports = Tareas;