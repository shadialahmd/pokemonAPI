



    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(result => {

      return result.json();
    
    })
    .then(r =>{

        console.log(r["results"].length);
      
      for(var i=0 ;i<r["results"].length;i++){

        var div=document.createElement("DIV");
       div.innerHTML=r["results"][i]["name"];
       document.body.appendChild(div);
       
      
      }
      document.getElementById("demo").innerHTML=JSON.stringify(r);
      console.log(r);
      

    }) //console.log(r['results']));

