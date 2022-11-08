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

    cargarTareas(tareas = []){
        tareas.forEach(tarea => this._listado[tarea.id] = tarea)
    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

    listadoCompleto(){
        console.log()
        this.listadoArr.forEach(({desc, completadoEn}, idx) => {
            console.log(`${String(idx + 1 + '.').green} ${desc} :: ${completadoEn === null ? 'Pendiente'.red : 'Completada'.green }`)
        })
        console.log()
    }

}

module.exports = Tareas;