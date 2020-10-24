function inserirItem(){  
    var lista = document.createElement('li');
    var it = document.getElementById('it').value;
    var item = document.createTextNode(it);
    if(it){
        lista.appendChild(item);
        lista.classList.add('menuitem');
        document.getElementById('Lista').appendChild(lista);
        document.getElementById('it').value = '';
    }
}