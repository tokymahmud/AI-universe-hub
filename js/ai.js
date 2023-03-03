

const loadais = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayai(data.data.tools);

}

loadais();

    
const displayai = ais=>{
    // console.log(ais);
    const aiscontainer = document.getElementById('ai-Container');
// fordisplaying only the search one
//    aicontainer.innerHTML='';


ais.forEach(ai => {
    console.log(ai)
    const aidiv = document.createElement('div');
    aidiv.classList.add('col');
    aidiv.innerHTML = `
    <div class="card h-100">
    <img src="${ai.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Features</h5>
      <ol type="1">
      <li>
      ${ai.features[0]      }
      </li>
      <li>
      ${ai.features[1]      }
      </li>
      <li>
      ${ai.features[2]      }
      </li>
      </ol>
     
        
      
    </div>
    <div class="card-footer">
    <h5 class="card-title"> ${ai.name     }</h5>

      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
`


aiscontainer.appendChild(aidiv);
});
   
}
