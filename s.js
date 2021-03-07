const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ghost: '#db93de'
}

pokemon_count = 100;

const fetchPokemons = async () => {
    console.log("start fetching");
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
    console.log("end fetching");
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    var div=document.createElement("DIV");
    div.className="pok";

    div.innerHTML=`<div id="name">${data['name']}</div>`;

    div.style.backgroundColor=colors[data['types'][0]['type']['name']]
    div.innerHTML+=`<div class="img-container"><img style="width:150px" src=https://pokeres.bastionbot.org/images/pokemon/${id}.png></div>`;
   
    div.innerHTML+=`<div id="num"> # ${id}</div>`;
    div.innerHTML+=`<div id="type">Type : ${data['types'][0]['type']['name']}</div>`;

    document.body.appendChild(div);

    console.log(data);
    
}
fetchPokemons();