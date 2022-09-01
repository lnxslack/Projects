const inserirProdutos = document.getElementById('ilist').addEventListener('click', inserirItem);
const inserirSupermercado = document.getElementById('isuperm').addEventListener('click', inserirSupermkt);
const carregarLista = document.getElementById('iloadlist').addEventListener('click', loadList);

async function loadList(){
    let itens = await fetch("./produtos.json").then(response => {
        return response.json();
    }); 
    let produtos = itens.Lista.Produtos;
    console.log(produtos);
}

function inserirItem(){ 
    var listaItens = [];        
    var lista = document.createElement('li');
    var it = document.getElementById('it').value;
    var item = document.createTextNode(it);
    if(it){
        listaItens.push(it);
        lista.appendChild(item);
        lista.classList.add('menuitem');
        document.getElementById('Lista').appendChild(lista);
        document.getElementById('it').value = '';
    }
    console.log(listaItens);
}

function inserirSupermkt(){  
    let supermkt = document.createElement('b');
    let supermercado = document.getElementById('it').value;
    supermkt.className = 'supmkt';
    supermkt.textContent = supermercado;
    document.getElementById('Supermercados').appendChild(supermkt);
    document.getElementById('it').value = '';
}