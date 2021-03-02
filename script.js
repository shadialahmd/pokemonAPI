



    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(result => {

      return result.json();
    
    })
    .then(r =>{

      for(var i=0 ;i<21;i++){

        var div=document.createElement("DIV");
       div.innerHTML=r["results"][i]["name"];
       document.body.appendChild(div);
      
      }
      
      document.getElementById("demo").innerHTML=JSON.stringify(r);
      console.log(r["results"]);
    }) //console.log(r['results']));

