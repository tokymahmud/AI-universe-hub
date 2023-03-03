

const loadais = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayai(data.data.tools);

}

loadais();

    
const displayai = ais=>{
    console.log(ais);
    const aiscontainer = document.getElementById('ai-Container');

//    aicontainer.innerHTML='';

// slice part
if(ais.length >5){
    ais = ais.slice(0, 5);
    const showAll = document.getElementById('show-all');
    showAll.classList.remove('d-none');
}

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
    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#arrowModal">
    <i class="fa-solid fa-arrow-right position-absolute top-0 start-100 translate-middle fs-1 text-danger rounded-circle bg-danger bg-opacity-25 align-items-center justify-content-center mx-5 mt-4 "> </i>
    </button>

   
    
    </div>
  </div>
`


aiscontainer.appendChild(aidiv);

});
toogleSpinner(false);

   
}

tooglespinner(true);

const tooglespinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')


    }
} 
toogleSpinner(false);

// showall 2nd part

document.getElementById('btn-show-all').addEventListener('click', function(){
    
    tooglespinner(true);
})

// const loadaisdetail = async id =>{
//     const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displaymodaldetail(data);
// }
// const displaymodaldetail = modal =>{
//     console.log(modal)
// }