

const loadais = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayai(data.data.tools);

}

loadais();
    

const toogleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')


    }
} 



const displayai = ais=>{
    console.log(ais);
    const aiscontainer = document.getElementById('ai-Container');

//    aicontainer.innerHTML='';

// slice part
if(ais.length >5){
    ais = ais.slice(0, 12);
    const showAll = document.getElementById('show-all');
    showAll.classList.remove('d-none');
}
else{
    showAll.classList.add('d-none');
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
    <button  type="button" class="btn " data-bs-toggle="modal" data-bs-target="#arrowModal">
    <i onclick="loadaisdetail('${ai.id}')" class="fa-solid fa-arrow-right position-absolute top-0 start-100 translate-middle fs-1 text-danger rounded-circle bg-danger bg-opacity-25 align-items-center justify-content-center mx-5 mt-4 "> </i>
    </button>

   
    
    </div>
  </div>
`


aiscontainer.appendChild(aidiv);

});
toogleSpinner(false);

   
}


toogleSpinner(true);


// showall 2nd part

document.getElementById('btn-show-all').addEventListener('click', function(){
    const showAll = document.getElementById('show-all');
    showAll.classList.add('d-none');
   
    toogleSpinner(true);
})

// const loadaisdetail = async id =>{
//     let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.data);
    
// }

const loadaisdetail = (id) => {
    let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaymodaldetail(data.data));
  }
  loadaisdetail();


const displaymodaldetail = modal =>{
    console.log(modal);
    const modalTitle = document.getElementById('arrowModalLabel');
    modalTitle.innerText = modal.description;
   const  modalPrice = document.getElementById('modalpricing');
   
   modalPrice.innerHTML =`
   <div class="border border-white p-2 text-success fw-bolder fs-3 bg-light rounded gap-2"  >${modal.pricing[0].price? modal.pricing[0].price:'free of cost!!' }</div>
   
    <div class="border border-white p-2 text-danger-emphasis fw-bolder fs-3 bg-light rounded gap-2">${modal.pricing[1].price? modal.pricing[1].price:'free of cost!!' }</div>
    <div class="border border-white p-2 text-danger fw-bolder fs-3 bg-light rounded gap-2">${modal.pricing[2].price? modal.pricing[2].price:'free of cost!!' }</div>
   `
   const  modalfeature = document.getElementById('modalf');
  
   
   modalfeature.innerHTML =`
   <ol>
      <li>
      ${modal.features[1].feature_name? modal.features[1].feature_name:"No feature!!"      }
      </li>
      <li>
      ${modal.features[2].feature_name? modal.features[2].feature_name:"No feature!!"      }
      </li>
      <li>
      ${modal.features[3].feature_name? modal.features[3].feature_name:"No feature!!"      }
      </li>
      </ol>
   
   `
   const  modalintegration = document.getElementById('modali');
   
   
   modalintegration.innerHTML =`
   <ol>
      <li>
      ${modal.integrations[0]? modal.integrations[0]:"No data found"      }
      </li>
      <li>
      ${modal.integrations[2]? modal.integrations[2]:"No data found"      }
      </li>
      <li>
      ${modal.integrations[3]? modal.integrations[3]:"No data found"      }
      </li>
      </ol>
   
   `
   const  modalimage = document.getElementById('modalimg');
   
   
   modalimage.innerHTML =`
   <div class="position-relative">
  
   <div class="position-absolute top-0 end-0 fw-bold bg-danger p-2  border border-danger rounded text-light">${modal.accuracy.score*100? modal.accuracy.score*100:"" }% accuracy </div>
   
 </div>
   <img src="${modal.image_link[0]}" class="img-thumbnail figure-img img-fluid rounded" alt="...">
  
   
   `
   const  modalinpout = document.getElementById('io');
   
   
   modalinpout .innerHTML =`
   <h3>${modal.input_output_examples[0].input? modal.input_output_examples[0].input :"Can you give any example?"}</h3>
   <p>${modal.input_output_examples[0].output? modal.input_output_examples[0].output:"No! Not Yet! Take a break!!!"}</p>

   
   `

   
}

// const sortbydate= () =>{
//     const datesforsort = ${ais.published_in};
//     dates = datesforsort.sort();

// }