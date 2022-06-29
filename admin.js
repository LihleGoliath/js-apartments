let items =JSON.parse(localStorage.getItem("items")) ? JSON.parse(localStorage.getItem("items")) : [
    {
       property_id:1,
        apartment_name:"Apartment 1",
        imgURL:"https://i.postimg.cc/3N51gSDr/Apartment-1.webp",
        bedrooms:5,
        bathrooms:2,
        garage:3    ,
        Location:"Cape Town",
        Price:5600,
        status:"Rent",
    },
    {
        property_id:2,
         apartment_name:"Apartment 2",
         imgURL:"https://i.postimg.cc/KvdGtt0q/Apartment-2.webp",
         bedrooms:4,
         bathrooms:3,
         garage:3,
         Location:"New York",
         Price:15000,
         status:"Sale",
     },
     {
        property_id:3,
         apartment_name:"Apartment 3",
         imgURL:"https://i.postimg.cc/LsmMVDLT/Apartment-3.webp",
         bedrooms:6,
         bathrooms:4,
         garage:4,
         Location:"New York",
         Price:300000 ,
         status:"Sale",
     },
     {
        property_id:4,
         apartment_name:"Apartment 4",
         imgURL:"https://i.postimg.cc/7ZnLDfNK/Apartment-4.jpg",
         bedrooms:5,
         bathrooms:3,
         garage:3,
         Location:"New York",
         Price:2020,
         status:"Sale",
     },
     {
        property_id:5,
         apartment_name:"Apartment 5 ",
         imgURL:"https://i.postimg.cc/hj6DMxSt/Apartment-5.webp",
         bedrooms:4,
         bathrooms:3,
         garage:2,
         Location:"Cape Town",
         Price:10000,
         status:"Rent",
     },
     {
        property_id:6,
         apartment_name:"Apartment 6",
         imgURL:"https://i.postimg.cc/pXtxTPr4/Apartment-6.webp",
         bedrooms:6,
         bathrooms:5,
         garage:1,
         Location:"Cape Town",
         Price:202000,
         status:"Rent",
     },
     {
        property_id:7,
         apartment_name:"Apartment 7",
         imgURL:"https://i.postimg.cc/Qdx29C34/Apartment-7.webp",
         bedrooms:3,
         bathrooms:4,
         garage:1,
         Location:"London",
         Price:201900,
         status:"Sale",
     },
     {
        property_id:8,
         apartment_name:"Apartment 8",
         imgURL:"https://i.postimg.cc/KjGNqKQC/Apartment-8.webp",
         bedrooms:6,
         bathrooms:4,
         garage:2,
         Location:"London",
         Price:2000000,
         status:"Sale",
     },
     {
        property_id:9,
         apartment_name:"Apartment 9",
         imgURL:"https://i.postimg.cc/bJzk87bt/Apartment-9.webp",
         bedrooms:5,
         bathrooms:3,
         garage:3,
         Location:"London",
         Price:200000,
         status:"Rent",
     },
     {
        property_id:10,
         apartment_name:"Apartment 10",
         imgURL:"https://i.postimg.cc/gj1xwQw4/Apartment-10.webp",
         bedrooms:7,
         bathrooms:9,
         garage:2,
         Location:"CapeTown",
         Price:2018000,
         status:"Rent",
     }
];


function showItems(item) {
    document.querySelector("#properties").innerHTML=" ";
    item.forEach(item  => {
    document.querySelector("#properties").innerHTML+=`
    <div class="container d-flex justify-content-between text-dark border rounded my-2"  style="z-index:300; width:100%;">
    <div class="d-flex">
    <p class="m-2 fs-5">${item.apartment_name}</p>
    <span>Status:${item.status}</span>
    <p  class="ms-2"> Price:${item.Price}</p>
    <p  class="ms-2"> bedrooms:${item.bedrooms}</p>
</div>
    <div class="" >
    <button class="btn btn-info rounded m-1 edit"  data-bs-toggle="modal" data-bs-target="#item${item.property_id}">EDIT</button>
    <button class="btn btn-danger m-1 delete" onclick="DelProperty(${item.property_id})" >DEL</button>
    </div>
    </div>
<div class="modal fade" id="item${item.property_id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Property</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     <form onsubmit="EditProperty(${item.property_id})">
     <input type="text" name="Apartment_name" id="Apartment_name"  placeholder="${item.apartment_name}">
     <input type="text" name="imgURL"  id ="imageUrl" placeholder="${item.imgURL}">
     <input type="text" name="Bedrooms"  id="Bedrooms" placeholder="${item.bedrooms}">
     <input type="text" name="Bathrooms" id="Bathrooms" placeholder="${item.bathrooms}">
     <input type="text" name="Garage"  id="Garage" placeholder="${item.garage}">
     <input type="text" name="Price" id="Price" placeholder="${item.Price}">
     <input type="text" name="Location"  id="Location" placeholder="${item.Location}">
    <select name="Status"  class="Status"  >
    <option value="${item.status}">${item.status}</option>
    <option value="Rent">Rent</option>
    <option value="Sale">Sale</option>
    </select>
    <button type="submit" class="btn btn-outline-primary">Edit</button>
     </form>
      </div>
    </div>
  </div>
</div>

    `       
    });
    
}
showItems(items);

const element = document.getElementById("Addproperty");
element.addEventListener("click",addproperty);

function  addproperty (){
    console.log("working");
    const property ={
        property_id:items.length+1,
        apartment_name: document.querySelector("#Apartment_name").value,
        imgURL:document.querySelector("#imageUrl").value ,
       bedrooms : document.querySelector("#Bedrooms").value ,
       bathrooms: document.querySelector("#Bathrooms").value,
       garage : document.querySelector("#Garage").value,
       Location: document.querySelector("#Location").value,
       Price: document.querySelector("#Price").value,
       status: document.querySelector("#Status").value,
    };
   
    items.push(property);
    localStorage.setItem("items",JSON.stringify(items));
    showItems(items)
  };

  function DelProperty(id){
    console.log(id)
items = items.filter(item =>{
    console.log(item)
    return item.property_id !== id 
})
    localStorage.setItem("items",JSON.stringify(items));
    showItems(items)
  }

function locationFilter(e){
    const location = e.target.value;
    if (location === "All_Cites") {
      return showItems(items);
    }
    const filtered = items.filter((item) => item.Location === location);
    return showItems(filtered);
  };

  function SortingPrice (e){
    const direction = e.target.value;
    const sorted = items.sort((a, b) => a.Price - b.Price);
    if (direction === "5600") {
      showItems(sorted);
    } else {
      showItems(sorted.reverse());
    }
  };function StatusFilter(e){
    const status = e.target.value;
    if (status === "All-Status") {
      return showItems(items);
    }
    const statusfiltered = items.filter((item) => item.status === status);
    return showItems(statusfiltered);
  };
    function SortingBeds (e) {
    const direction = e.target.value;
    const sorted = items.sort((a, b) => a.bedrooms - b.bathrooms);
    if (direction === "Max.Bedrooms") {
      showItems(sorted);
    } else {
      showItems(sorted.reverse());
    }
    }
function EditProperty(id) {
    let item = items.find(item =>item.property_id === id);
    
       item.apartment_name = document.querySelectorAll("#Apartment_name").value;
       item.imgURL =document.querySelectorAll("#imageUrl").value ;
       item.bedrooms  = document.querySelectorAll("#Bedrooms").value ;
       item.bathrooms = document.querySelectorAll("#Bathrooms").value;
       item.garage  = document.querySelectorAll("#Garage").value;
       item.Location = document.querySelectorAll("#Location").value;
       item.Price = document.querySelectorAll("#Price").value;
       item.status = document.querySelectorAll("#Status").value;  
    localStorage.setItem("items",JSON.stringify(items));
    showItems(items);    
}