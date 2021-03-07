pokemon_count = 10;

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
    var img=document.createElement("IMG");
    div.innerHTML=id+' '+data['name'];
    div.innerHTML+=`<img src=https://pokeres.bastionbot.org/images/pokemon/${id}.png>`;
  
    // img.src='https://pokeres.bastionbot.org/images/pokemon/'+id+'.png';
    document.body.appendChild(div);
   // document.body.appendChild(img);
    console.log(data);
    
}
fetchPokemons();