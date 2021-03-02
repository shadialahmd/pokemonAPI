const pokemon_count = 5;


const fetchPokemon = async () =>{

    for(i=1;i<= pokemon_count;i++){
        console.log(i);
        await getPokemon(i);
    }

}


const getPokemon = async(pokemon_count) =>
{
    var url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit="+pokemon_count;
    fetch(url).then( 
        result=> {
           var x=  result.json()
           
           createPokemon(x);
        }  )

  
}

const createPokemon =async(rr)=>{

    var div=document.createElement("DIV");
    var img=document.createElement("IMG");
    var id=r["results"][i]["url"].slice(0,-1);
    var l=id.slice(-2);
 

    console.log(l);
    if(l % 1 == 0 ){

        rr= id.slice(-2);
       
     }
     else {
        rr= id.slice(-1);
     }
  
   div.innerHTML=r["results"][i]["name"];
   img.src='https://pokeres.bastionbot.org/images/pokemon/'+rr+'.png';


   document.body.appendChild(img);

   
   document.body.appendChild(div);
}



fetchPokemon();
