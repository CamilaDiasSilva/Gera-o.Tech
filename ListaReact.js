import React, { useState, useMemo, useCallback } from 'react';

const ListaCompras = () => {
    const [lista, setLista] = useState([
        { id: 1, nome: "Arroz", preco: 20, qt: 2 },
        { id: 2, nome: "Feijao", preco: 8, qt: 3 },
        { id: 3, nome: "Macarrao", preco: 5, qt: 1 }
    ]);

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [qt, setQt] = useState('');

    const total = useMemo(() => lista.reduce((acc, item) => acc + item.preco * item.qt, 0), [lista]);

    const add = useCallback((n, p, q) => {
        const parsedPreco = parseFloat(p);
        const parsedQt = parseInt(q);
        if (n.trim() && !isNaN(parsedPreco) && parsedPreco >= 0 && !isNaN(parsedQt) && parsedQt > 0) {
            const newId = Math.max(...lista.map(item => item.id), 0) + 1;
            setLista(prevLista => [...prevLista, { id: newId, nome: n.trim(), preco: parsedPreco, qt: parsedQt }]);
            setNome('');
            setPreco('');
            setQt('');
        }
    }, [lista]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        add(nome, preco, qt);
    }, [add, nome, preco, qt]);

    return (
        <div>
            <h2>Lista de Compras</h2>
            <ul>
                {lista.map((item) => (
                    <li key={item.id}>
                        {item.nome} - Preço: {item.preco} - Quantidade: {item.qt} - Subtotal: {item.preco * item.qt}
                    </li>
                ))}
            </ul>
            <p>Total da compra: {total}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome do item"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    min="0"
                    step="0.01"
                    required
                />
                <input
                    type="number"
                    placeholder="Quantidade"
                    value={qt}
                    onChange={(e) => setQt(e.target.value)}
                    min="1"
                    required
                />
                <button type="submit">Adicionar Item</button>
            </form>
        </div>
    );
};

export default ListaCompras;