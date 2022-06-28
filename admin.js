const items =JSON.parse(localStorage.getItem("items")) ? JSON.parse(localStorage.getItem("items")) : [
    {
       property_id:1,
        apartment_name:"Apartment 1",
        imgURL:"https://i.postimg.cc/3N51gSDr/Apartment-1.webp",
        bedrooms:5,
        bathrooms:2,
        garage:1,
        size:1200,
        madeIn:2016,
        status:"Rent",
    },
    {
        property_id:2,
         apartment_name:"Apartment 2",
         imgURL:"https://i.postimg.cc/KvdGtt0q/Apartment-2.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2016,
         status:"Sale",
     },
     {
        property_id:3,
         apartment_name:"Apartment 3",
         imgURL:"https://i.postimg.cc/LsmMVDLT/Apartment-3.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2017,
         status:"Sale",
     },
     {
        property_id:4,
         apartment_name:"Apartment 4",
         imgURL:"https://i.postimg.cc/7ZnLDfNK/Apartment-4.jpg",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2020,
         status:"Sale",
     },
     {
        property_id:5,
         apartment_name:"Apartment 5 ",
         imgURL:"https://i.postimg.cc/hj6DMxSt/Apartment-5.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2019,
         status:"Rent",
     },
     {
        property_id:6,
         apartment_name:"Apartment 6",
         imgURL:"https://i.postimg.cc/pXtxTPr4/Apartment-6.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2020,
         status:"Rent",
     },
     {
        property_id:7,
         apartment_name:"Apartment 7",
         imgURL:"https://i.postimg.cc/Qdx29C34/Apartment-7.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2019,
         status:"Sale",
     },
     {
        property_id:8,
         apartment_name:"Apartment 8",
         imgURL:"https://i.postimg.cc/KjGNqKQC/Apartment-8.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2017,
         status:"Sale",
     },
     {
        property_id:9,
         apartment_name:"Apartment 9",
         imgURL:"https://i.postimg.cc/bJzk87bt/Apartment-9.webp",
         bedrooms:5,
         bathrooms:2,
         garage:1,
         size:1200,
         madeIn:2018,
         status:"Rent",
     },
     {
        property_id:10,
         apartment_name:"Apartment 10",
         imgURL:"https://i.postimg.cc/gj1xwQw4/Apartment-10.webp",
         bedrooms:7,
         bathrooms:4,
         garage:2,
         size:2300,
         madeIn:2018,
         status:"Rent",
     },
];


function showItems(items) {
    document.querySelector("#properties").innerHTML=" ";
    items.forEach(item => {
    document.querySelector("#properties").innerHTML+=`
    <div class="container d-flex justify-content-between text-dark border rounded my-2"  style="z-index:300; width:100%;">
    <div class="d-flex">
    <p class="m-2 fs-5">${item.apartment_name}</p>
    <span>Status:${item.status}</span>
</div>
    <div class="" >
    <button class="btn btn-info rounded m-1 edit">EDIT</button>
    <button class="btn btn-danger m-1 delete" onclick="DelProperty()" >DEL</button>
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
        apartment_name: document.querySelector("#Apartment_name").value,
        imgURL:document.querySelector("#imageUrl").value ,
       bedrooms : document.querySelector("#Bedrooms").value ,
       bathrooms: document.querySelector("#Bathrooms").value,
       garage : document.querySelector("#Garage").value,
       size: document.querySelector("#size").value,
       madeIn: document.querySelector("#MadeIn").value,
       status: document.querySelector("#Status").value,
    };
   
    items.push(property);
    localStorage.setItem("items",JSON.stringify(items));
    showItems(items)
  };

  const className = document.querySelectorAll("delete");
  className.addEventListener("click",DelProperty);

  function DelProperty() {
const index = items.filter(item=> return item.property_id ).indexOf(id)
    items.splice(index,1);
    
  }
