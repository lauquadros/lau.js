let inventario = [
    { nome: 'camisa polo', preco: 32, emEstoque: true },
    { nome: 'calça cargo', preco: 120, emEstoque: false },
    { nome: 'shorts', preco: 35, emEstoque: true },
    { nome: 'vestido', preco: 110, emEstoque: true},
    { nome: 'pijama', preco: 43, emEstoque: true},
    { nome: 'casaco jeans', preco: 85, emEstoque: false},
    { nome: 'blazer', preco: 68, emEstoque: false},
    { nome: 'terno', preco: 180, emEstoque: true},
    { nome: 'meias', preco: 15, emEstoque: false},
    { nome: 'roupas intimas', preco: 20, emEstoque: true},
    { nome: 'legging', preço: 28, emEstoque: true},
    { nome: 'camisa social', preço: 80, emEstoque: true},
    { nome: 'jaqueta', preco: 120, emEstoque: false},
    { nome: 'moletom', preço: 350, emEstoque: true},
    { nome: 'calça jeans', preço: 150, emEstoque: true},
    { nome: 'biquini', preço: 76, emEstoque: true},
    ];

    inventario.push({ nome: 'Cropped', preco: 55, emEstoque: true });

    inventario.pop({ nome: 'calça jeans', preço: 150, emEstoque: true},);

    inventario[80].preco = 65;

    inventario[1].emEstoque = true;

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[10].emEstoque) {
        console.log(inventario[i].nome + ' true.');
        }
        }

        let produtosEmEstoque = inventario.filter (legging => legging.true);
console.log(produtosEmEstoque);