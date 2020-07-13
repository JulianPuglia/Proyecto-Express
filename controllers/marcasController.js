const fs = require('fs');
let db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

let titulo = '///////////Concesionarias DH\\\\\\\\\\\\\\\\'
let subTitulo = 'Estas son nuestras marcas asociadas:'

const marcas ={

    listadoMarcas: (req, res) =>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write(`------------------------------------\n${titulo}\n-------------------------------------\n`)
        res.write('\n')
        res.write(`-----------------------------------\n${subTitulo}\n-----------------------------------\n`)
        let autosLista = [];
        db.forEach((sucursal)=>{sucursal.autos.forEach((auto)=>{
            autosLista.push(auto.marca)
        })})
        let marcasUnicas = [...new Set(autosLista.sort())];
        marcasUnicas.forEach((marcas) =>{
            res.write('\n' + '-'+ marcas.toUpperCase() +'\n')
        })
        res.write('\n')
        res.write('TOTAL DE MARCAS:' + marcasUnicas.length)
        res.end()
    },
    autosPorMarca: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'});
        let id = req.params.marca;
        let listaMarcas = [];
        db.forEach(sucursal=>{
            sucursal.autos.forEach(auto =>{
                listaMarcas.push(auto.marca)
            })
        })
        if(id == listaMarcas){
            res.write('Esta es la lista de veiculos disponibles')
            db.forEach(sucursal =>{
                sucursal.autos.forEach(auto =>{
                    res.write(`${auto.marca} ${auto.modelo} ${auto.anio} ${auto.color}`)
                })
            })
        }
        res.end()

    }
}

module.exports = marcas;