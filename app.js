const Tareas = require("./models/tareas")
const { 
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoChecklist,
} = require("./helpers/inquirer")
const { guardarDB, leerDB } = require("./helpers/guardarArchivo")

const main = async () => {

    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB()

    if(tareasDB){
        tareas.cargarTareas(tareasDB)
    }

    do{
        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ')
                tareas.crearTarea(desc)
                break;
            case '2':
                tareas.listado()
                break;
            case '3':
                tareas.listadoCompletadas(true)
                break;
            case '4':
                tareas.listadoCompletadas(false)
                break;
            case '5':
                const ids = await listadoChecklist(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if(id !== '0'){
                    const ok = await confirmar('Está seguro?')
                    if(ok){
                        tareas.borrarTarea(id)
                        console.log('Tarea borrada')
                    }
                }
                break;
        }

        guardarDB(JSON.stringify(tareas.listadoArr))

        if(opt !== '0') await pausa();

    }while(opt !== '0')

}

main()