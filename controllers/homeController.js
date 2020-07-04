const fs = require('fs');
let db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const home ={
    index: (req,res) => {
        res.write (`----------------------------\nBIENVENIDOS A DH AUTOMOVILES\n----------------------------\n\n`)
        let sucursalesTitulos =[];
        db.forEach((sucursales)=> {
            sucursalesTitulos.push(sucursales.sucursal)
        });
        res.write(`Estas son nuestras sucursales\n-----------------------------\n*${sucursalesTitulos.join('\n*')}`)
        res.end() 
    }
}

module.exports = home;