





    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
    .then(result => {

      return result.json();
    
    })
    .then(r =>{
       

        console.log(r["results"].length);
      
      for(var i=1 ;i<r["results"].length;i++){

        

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
      //document.getElementById("demo").innerHTML=JSON.stringify(r);
      console.log(r);
      

    }) 




    