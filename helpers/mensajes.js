require('colors');
const readline = require('readline')
const { stdin: input, stdout: output } = require('process')

const mostrarMenu = () => {

    return new Promise(resolve => {
        //console.clear()
        console.log('============================'.green)
        console.log('   Seleccione una opción    '.green)
        console.log('============================\n'.green)

        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green} Listar tareas`)
        console.log(`${'3.'.green} Listar tareas completadas`)
        console.log(`${'4.'.green} Listar tareas pendientes`)
        console.log(`${'5.'.green} Completar tarea(s)`)
        console.log(`${'6.'.green} Borrar tarea`)
        console.log(`${'0.'.green} Salir \n`)

        const rl = readline.createInterface({ input, output });
        
        rl.question('Seleccione una opción: ', (ans) => {
            resolve(ans)
            rl.close()
        })
        
    })
    
}

const pausa = () => {

    return new Promise(resolve => {

        const rl = readline.createInterface({ input, output });

        rl.question(`\nPresione ${'ENTER'.green} para continuar\n`, (ans) => {
            resolve()
            rl.close()
        })

    })
}

module.exports = {
    mostrarMenu,
    pausa,
}