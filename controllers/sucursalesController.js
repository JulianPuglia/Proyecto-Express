const fs = require('fs');
let db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

let titulo = 'Bienvenido a nuestra seccion de sucursales';
const sucursales ={ 
    listadoSucursales: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write(`${titulo.toUpperCase()}\n`);
        res.write('\n');
        db.forEach((sucursal)=>{
        res.write('------------------------\n')
        res.write('Sucursal: ' + '*' + ' ' + sucursal.sucursal);
        res.write('\n');
        res.write('Direccion: ' + sucursal.direccion);
        res.write('\n');
        res.write('Telefono: ' + sucursal.telefono);
        res.write('\n');
        })
        res.end();
    },
    detallesSucursales: (req, res) => {
        let idSucursal = req.params.sucursal;
        let autosCantidad =[];
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write(`///////////Concesionarias DH\\\\\\\\\\\\\\\\`);
        res.write('\n\n')
        db.forEach((sucursal) =>{
            if (idSucursal.toLowerCase() == sucursal.sucursal.toLowerCase()){
                sucursal.autos.forEach((auto)=>{
                    autosCantidad.push(auto)
                })
                res.write('Bienvenido a la sucursal de ' + sucursal.sucursal.toUpperCase())
                res.write('\n')
                res.write('\n-----------------------------\n')
                res.write('Total de autos disponibles ' + autosCantidad.length)
                res.write('\n')
                res.write('-----------------------------\n')
                autosCantidad.forEach((auto)=>{res.write(`\n -${auto.marca.toUpperCase()}  ${auto.modelo.toUpperCase()}  ${auto.anio}  ${auto.color}
                `)})
                res.write('\n')
                res.write('\n-----------------------------------------------------------------------------------------------------\n')
                res.write('Nos encontramos en: ' + sucursal.direccion)
                res.write('\n------------------------------------------------------------------------------------------------------\n')
                res.write('\n------------------------------------------\n')
                res.write('Comunicate con nostros al: ' + sucursal.telefono)
                res.write('\n----------------------------------------\n')
                res.end()
            }
            
        })
        res.end('404, No se encuentra una sucursal en la zona especificada')
    }
}

module.exports = sucursales;