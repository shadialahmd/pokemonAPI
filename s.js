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

pokemon_count = 110;

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
    div.className="dd";
    var img=document.createElement("IMG");
    div.innerHTML=id+' '+data['name'];
    div.style.backgroundColor=colors[data['types'][0]['type']['name']]
    div.innerHTML+=`<img style="width:150px" src=https://pokeres.bastionbot.org/images/pokemon/${id}.png>`;
  
    // img.src='https://pokeres.bastionbot.org/images/pokemon/'+id+'.png';
    document.body.appendChild(div);
   // document.body.appendChild(img);
    console.log(data);
    
}
fetchPokemons();