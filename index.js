(async () => {

    const database = require('./db');
    const Equipamento = require('./equipamento');
    await database.sync();

    const novoEquipamento = await Equipamento.create({
        nome: 'Extensor',
        preco: 2500          
    })

    console.log(novoEquipamento);
    const equipamentos = await Equipamento.findAll();
    console.log(equipamentos);

})();