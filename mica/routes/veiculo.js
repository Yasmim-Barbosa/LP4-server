const express = require('express');
const router = express.Router();

let veiculos = [
    { id: 1, nome: 'Fusca', fabricante: 'Volkswagen', ano: 1970, combustivel: 'Gasolina', cor: 'Azul', preco: 15000 },
    { id: 2, nome: 'Civic', fabricante: 'Honda', ano: 2020, combustivel: 'Gasolina', cor: 'Preto', preco: 90000 },
    { id: 3, nome: 'Onix', fabricante: 'Chevrolet', ano: 2019, combustivel: 'Flex', cor: 'Branco', preco: 50000 },
    { id: 4, nome: 'BMW X1', fabricante: 'BMW', ano: 2023, combustivel: 'Gasolina', cor: 'Roxa', preco: 318950 },
    { id: 5, nome: 'Porsche', fabricante: 'Cayenne Coupé ', ano: 2024, combustivel: 'Gasolina/Eletricidade', cor: 'Cinza', preco: 120000 }
];

// POST para adicionar um veículo
router.post('/', (req, res) => {
    const { nome, fabricante, ano, combustivel, cor, preco } = req.body;
    const novoVeiculo = { id: veiculos.length + 1, nome, fabricante, ano, combustivel, cor, preco };
    veiculos.push(novoVeiculo);
    res.status(201).json(novoVeiculo);
});

//// Put para atualizar um veículo
router.put('/', (req, res) => {
    const { id, preco } = req.body;
    const veiculo = veiculos.find(v => v.id === id);
    if (veiculo) {
        veiculo.preco = preco;
        res.status(200).send('Os dados foram atualizados.');
    } else {
        res.status(404).send('Veículo não encontrado.');
    }
});

// DELETE para excluir um veículo
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    veiculos = veiculos.filter(v => v.id !== id);
    res.status(202).send(`O veículo de ID ${id} foi excluído com sucesso.`);
});

module.exports = router;