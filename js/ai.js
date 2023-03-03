

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
    <div class="card h-100 p-3">
    <img src="${ai.image}" class="card-img-top rounded" alt="...">
    <div class="card-body">
      <h5 class="card-title ">Features</h5>
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
    <hr>
    <div class=" d-flex">
    <div>
    <h5 class="card-title"> ${ai.name}</h5>
    <i class="fa-regular fa-calendar-days "> <span class="fs-6">${ai.published_in}   </span> </i>
    </div>

    <div class="gap-5 p-4 position-relative ">
    <i class="fa-solid fa-arrow-right position-absolute top-0 start-100 translate-middle fs-1 text-danger rounded-circle bg-danger bg-opacity-25 align-items-center justify-content-center mx-5 mt-4"></i>
    </div>
  </div>
`


aiscontainer.appendChild(aidiv);
});
   
}
