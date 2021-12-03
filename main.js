
var products = [
    {
        id: 0,
        nome: "Ventilador de piso Britânia Turbo C50",
        preco: 219,
        relevancia: 1,
        marca: "Brown",
        cartegoria: 1,
        cor: "Branco",
        fornecedor: "Anatel",
        imagem: "images/ventilador.png"
    },
    {
        id: 1,
        nome: "Ar condicionado LG Dual Inverter Voice split",
        preco: 1819,
        relevancia: 3,
        marca: "Brown",
        cartegoria: 1,
        cor: "Branco",
        fornecedor: "Anatel",
        imagem: "images/ar condicionado.png"
    },
    {
        id: 2,
        nome: "Fritadeira Elétrica Sem Óleo",
        preco: 297,
        relevancia: 1,
        marca: "Mug",
        cartegoria: 2,
        cor: "Preto",
        fornecedor: "Ambev",
        imagem: "images/fritadeira.png"
    },
    {
        id: 3,
        nome: "Copo Termico Stanley Para Cerveja",
        preco: 167,
        relevancia: 3,
        marca: "Mug",
        cartegoria: 2,
        cor: "Preto",
        fornecedor: "Ambev",
        imagem: "images/copo.png"
    },
    {
        id: 4,
        nome: "Torneira Cascata Banheiro Monocomando",
        preco: 249,
        relevancia: 3,
        marca: "Brown",
        cartegoria: 1,
        cor: "Preto",
        fornecedor: "Anatel",
        imagem: "images/torneira.png"
    },
    {
        id: 5,
        nome: "Cerveja Argentina Weisse Patagoni",
        preco: 9,
        relevancia: 3,
        marca: "Brown",
        cartegoria: 1,
        cor: "Branco",
        fornecedor: "Ambev",
        imagem: "images/cerveja.png"
    },
    {
        id: 6,
        nome: "Thom Browne",
        preco: 6018,
        relevancia: 1,
        marca: "Brown",
        cartegoria: 2,
        cor: "Preto",
        fornecedor: "Ambev",
        imagem: "images/chinela.png"
    },
    {
        id: 7,
        nome: "Montblanc Timewalker Urban Speed Chronograph",
        preco: 21736,
        relevancia: 3,
        marca: "Brown",
        cartegoria: 1,
        cor: "Preto",
        fornecedor: "Anatel",
        imagem: "images/relogio.png"
    },
    {
        id: 8,
        nome: "Geladeira no frost Electrolux DM84",
        preco: 5899,
        relevancia: 2,
        marca: "Mug",
        cartegoria: 2,
        cor: "Branco",
        fornecedor: "Anatel",
        imagem: "images/geladeira.png"
    }
];

function gridproducts(array) {
    const displayproducts = document.querySelector(".product-container");

    for (let i = 0; i < array.length; i++) {
        let carddiv = document.createElement('div');
        carddiv.className = "card";

        let nomeprodutodiv = document.createElement('div');
        nomeprodutodiv.className = "nomeProduto";
        let text = document.createTextNode(products[i].nome);
        nomeprodutodiv.appendChild(text);

        carddiv.appendChild(nomeprodutodiv);

        let imagediv = document.createElement('div');
        imagediv.className = "image";
        var img = document.createElement('img');
        img.src = products[i].imagem;
        imagediv.appendChild(img);

        carddiv.appendChild(imagediv);

        let precodiv = document.createElement('div');
        precodiv.className = "price";
        let text3 = document.createTextNode(products[i].preco);
        precodiv.appendChild(text3);

        carddiv.appendChild(precodiv);

        displayproducts.appendChild(carddiv);
    }
}

function filterProductsType() {
    var filtros = [];

    var obj = {};

    var type1  = document.getElementById("Byproducts");
    var type2  = document.getElementById("Byproducts1");

    if (type1.checked == true) {
        obj["cartegoria"] = type1.value;
    }

    if (type2.checked == true) {
        obj["cartegoria1"] = type2.value;
    }

    var color1 = document.getElementById("Bicolor");
    var color2 = document.getElementById("Bicolor1");
    
    if (color1.checked == true) {
        obj["cor"] = color1.value;
    }
    
    if (color2.checked == true) {
        obj["cor1"] = color2.value;
    }
    
    var marca1 = document.getElementById("brand");
    var marca2 = document.getElementById("brand1");
    
    if (marca1.checked == true) {
        obj["marca"] = marca1.value;
    }
    
    if (marca2.checked == true) {
        obj["marca1"] = marca2.value;
    }
    
    var forne1 = document.getElementById("fornecedor");
    var forne2 = document.getElementById("fornecedor1");
    
    if (forne1.checked == true) {
        obj["fornecedor"] = forne1.value;
    }
    
    if (forne2.checked == true) {
        obj["fornecedor1"] = forne2.value;
    }

    filtros.push(obj)

    filter(filtros);
}

function filter(obj) {
    var fil = [];

    if (!obj.length) {
        // Lista vazia, renderizar a tela com todos os produtos

        const displayproducts = document.querySelector(".conteudoCentral");

        let produtodiv = document.createElement('div');

        produtodiv.className = "product-container";

        displayproducts.appendChild(produtodiv);

        gridproducts();
    }
    else {
        // Lista não ta vazia

        // For percorrendo a lista "cat", e filtrar os próximos resultados.
        let cat = products.filter(products => products.cartegoria === parseInt(obj[0].cartegoria));

        fil.push(cat);

        let cat1 = products.filter(products => products.cartegoria === parseInt(obj[0].cartegoria1));

        fil.push(cat1);

        let cor = products.filter(products => products.cor === obj[0].cor);

        fil.push(cor);

        let cor1 = products.filter(products => products.cor === obj[0].cor1);

        fil.push(cor1);

        let mar = products.filter(products => products.marca === obj[0].marca);

        fil.push(mar);

        let mar1 = products.filter(products => products.marca === obj[0].marca1);

        fil.push(mar1);

        let forne = products.filter(products => products.fornecedor === obj[0].fornecedor);

        fil.push(forne);

        let forne1 = products.filter(products => products.fornecedor === obj[0].fornecedor1);

        fil.push(forne1);

        clear(fil);
    }
}

function clear(arr) {
    // Remove os elementos duplicados.

    let aux = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length != 0) {
            aux.push(arr[i]);
        }
    }

    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map(item => [item[key], item])).values()]
    }

    const arr1 = getUniqueListBy(aux, 'id');

    gridfilterproducts(arr1);
}

function gridfilterproducts(lista) {
    const displaying = document.querySelector(".product-container");

    displaying.remove()

    const displayable = document.querySelector(".conteudoCentral");

    let produced = document.createElement('div');

    produced.className = "product-container";

    displayable.appendChild(produced);

    produtoselecionados(lista);
}

function produtoselecionados(array){

    for (let i = 0; i < array.length; i++) {
        gridproducts(array[i]);
        console.log(array[i]);
    }
}


gridproducts(products);