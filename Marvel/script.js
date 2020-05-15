let btn = document.getElementById('marvelButton');
let container = document.getElementById('heroesContainer');

let store = createStore(counterReducer);

btn.addEventListener('click', function() {
    store.dispatch(getMarvelHeroes());
})
store.subscribe(function(){
    render();
})

          

async function render(){
    let res = await store.getState();
    res.forEach(element => {
        container.innerHTML += '<div class="card marvelCard">'+
            `<img src=${element.thumbnail.path + "." + element.thumbnail.extension} className="card-img-top" alt="..."></img>`+
            '<div class="card-body">'+
                `<h1 class="card-title">${element.name}</h1>`+
                `<p class="card-text">${element.description}</p>`+
            '</div>'+
        '</div>'
    });
}
        